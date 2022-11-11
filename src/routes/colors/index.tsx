import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from './colors.css?inline';

export default component$(() => {
    useStylesScoped$(styles)
    return (
        <>
            <p>color scheme found: <a href="https://coolors.co/25283d-e85f5c-dfd9e2-6ba292-fcfffc">here</a></p>

            <div class="colors__container">
                <div>foreground</div>
                <div>alert</div>
                <div>accent</div>
                <div>success</div>
                <div>background</div>
            </div>
        </>

    );
})
