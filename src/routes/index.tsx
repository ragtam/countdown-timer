import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h2>Countdown Timer</h2>

      <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link>
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
