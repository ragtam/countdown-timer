import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import Counter from "~/components/counter/counter";

export default component$(() => {
  return (
    <div class="host">
        <Counter></Counter>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Countdown Timer',
  meta: [
    {
      name: 'description',
      content: 'Countdown Timer Description',
    },
  ],
};
