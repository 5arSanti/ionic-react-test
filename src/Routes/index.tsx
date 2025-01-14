import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import { TestPage } from "../pages/Test";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";

const AppRoutes = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/home" children={<Home/>} />
                <Route exact path="/test" children={<TestPage />} />
            </IonRouterOutlet>
        </IonReactRouter>
    );
}

export { AppRoutes }