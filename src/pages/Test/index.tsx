import { IonAlert, IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import React, { FC } from "react";

const TestPage: FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const buttons = [
        { text: "Cancelar", role: "cancel", handler: () => console.log("Cancelado") },
        { text: "Confirmar", role: "confirm", handler: () => console.log("Confirmar") },
    ]

    const inputs = [
        { text: "Confirmar", type: "radio", value: "testing" },

    ]

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Test</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonText>
                    Hi!!!!
                </IonText>
                
                <IonButton id="present-id">Open Alert</IonButton>

                <IonAlert
                    trigger="present-id"
                    header="Alerta"
                    buttons={ buttons }
                    inputs={ inputs }
                    onDidDismiss={({ detail }) => console.log(`Dismissed with role: ${detail.role}`)}

                />
            </IonContent>
        </IonPage>
    );
}

export { TestPage };