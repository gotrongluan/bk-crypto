import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ErrorPage from 'components/ErrorPage';
import LoadingPage from 'components/LoadingPage';

const asyncComponent = getComponent => {
    return class extends React.Component {
        state = {
            component: null,
            errorMess: null,
        }

        componentDidMount() {
            getComponent()
                .then(component => {
                    this.setState({
                        component,
                    });
                })
                .catch(err => {
                    this.setState({
                        errorMess: err.message,
                    });
                });
        }

        render() {
            const { component: C, errorMess } = this.state;
            
            if (errorMess) {
                return <ErrorPage message={errorMess} />;
            }
            if (C) {
                return <C {...this.props} />;
            }
            return <LoadingPage />;
        }
    };
}

const asyncComponentFromPath = componentPath => {
    return asyncComponent(() => import(`pages/${componentPath}`).then(module => module.default));
};

export const toRoute = route => {
    if (route.redirect) {
        if (route.path) {
            return <Redirect exact from={route.path} to={route.redirect} />;
        }
        return <Redirect to={route.redirect} />;
    }
    else {
        if (route.component) {
            return <Route exact path={route.path} component={asyncComponentFromPath(route.component)} />;
        }
        if (route.routes) {
            return <Route path={route.path} render={() => (
                <Switch>
                    {route.routes.map(r => {
                        let nR = null;
                        if (r.path)
                            nR ={
                                ...r,
                                path: `${route.path}${r.path}`,
                            };
                        else 
                            nR = { ...r };
                        return toRoute(nR);
                    })}
                </Switch>
            )} />;
        }
        return null;
    }
}

