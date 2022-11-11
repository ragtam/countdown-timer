import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from './colors.css?inline';

export default component$(() => {
    useStylesScoped$(styles)
    return (
        <>
            <p>color scheme found: <a href="https://coolors.co/25283d-f34213-8f3985-6ba292-fcfffc">here</a></p>

            <div class="colors__container">
                <div>black</div>
                <div>red</div>
                <div>purple</div>
                <div>green</div>
                <div>white</div>
            </div>
        </>

    );
})
