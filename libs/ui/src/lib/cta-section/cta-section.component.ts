import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retell-cta-section',
  template: ` <div class="bg-indigo-700">
    <div
      class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">Boost your productivity.</span>
        <span class="block">Start using Workflow today.</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
        Malesuada adipiscing sagittis vel nulla nec.
      </p>
      <a
        href="#"
        class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
      >
        Sign up for free
      </a>
    </div>
  </div>`,
  styles: [],
})
export class CtaSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}