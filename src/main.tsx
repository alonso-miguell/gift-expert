import {createRoot} from "react-dom/client";
import {GiftExpertApp} from "./GiftExpertApp";
import {StrictMode} from "react";


const root = createRoot(document.getElementById('root') as HTMLElement) ;
root.render(
    <StrictMode>
        <GiftExpertApp />
    </StrictMode>
);