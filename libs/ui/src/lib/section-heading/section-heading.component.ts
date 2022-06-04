import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retell-section-heading',
  template: `<div class="pb-5 border-b border-gray-200 sm:pb-0">
    <h3 class="text-lg leading-6 font-medium text-gray-900">Candidates</h3>
    <div class="mt-3 sm:mt-4">
      <!-- Dropdown menu on small screens -->
      <div class="sm:hidden">
        <label for="current-tab" class="sr-only">Select a tab</label>
        <select
          id="current-tab"
          name="current-tab"
          class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>Applied</option>

          <option>Phone Screening</option>

          <option selected>Interview</option>

          <option>Offer</option>

          <option>Hired</option>
        </select>
      </div>
      <!-- Tabs at small breakpoint and up -->
      <div class="hidden sm:block">
        <nav class="-mb-px flex space-x-8">
          <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
          <a
            href="#"
            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
          >
            Applied
          </a>

          <a
            href="#"
            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
          >
            Phone Screening
          </a>

          <a
            href="#"
            class="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
            aria-current="page"
          >
            Interview
          </a>

          <a
            href="#"
            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
          >
            Offer
          </a>

          <a
            href="#"
            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
          >
            Hired
          </a>
        </nav>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class SectionHeadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
