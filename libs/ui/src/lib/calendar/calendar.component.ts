import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retell-calendar',
  template: `<div>
    <h2 class="text-lg font-semibold text-gray-900">Upcoming meetings</h2>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
      <div
        class="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9"
      >
        <div class="flex items-center text-gray-900">
          <button
            type="button"
            class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Previous month</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div class="flex-auto font-semibold">January</div>
          <button
            type="button"
            class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Next month</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        <div
          class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200"
        >
          <!--
          Always include: "py-1.5 hover:bg-gray-100 focus:z-10"
          Is current month, include: "bg-white"
          Is not current month, include: "bg-gray-50"
          Is selected or is today, include: "font-semibold"
          Is selected, include: "text-white"
          Is not selected, is not today, and is current month, include: "text-gray-900"
          Is not selected, is not today, and is not current month, include: "text-gray-400"
          Is today and is not selected, include: "text-indigo-600"

          Top left day, include: "rounded-tl-lg"
          Top right day, include: "rounded-tr-lg"
          Bottom left day, include: "rounded-bl-lg"
          Bottom right day, include: "rounded-br-lg"
        -->
          <button
            type="button"
            class="rounded-tl-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <!--
            Always include: "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
            Is selected and is today, include: "bg-indigo-600"
            Is selected and is not today, include: "bg-gray-900"
          -->
            <time
              datetime="2021-12-27"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >27</time
            >
          </button>
          <button
            type="button"
            class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2021-12-28"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >28</time
            >
          </button>
          <button
            type="button"
            class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2021-12-29"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >29</time
            >
          </button>
          <button
            type="button"
            class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2021-12-30"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >30</time
            >
          </button>
          <button
            type="button"
            class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2021-12-31"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >31</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-01"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >1</time
            >
          </button>
          <button
            type="button"
            class="rounded-tr-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-01"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >2</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-02"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >3</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-04"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >4</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-05"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >5</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-06"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >6</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-07"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >7</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-08"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >8</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-09"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >9</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-10"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >10</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-11"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >11</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-12"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >12</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-13"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >13</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-14"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >14</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-15"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >15</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-16"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >16</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-17"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >17</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-18"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >18</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-19"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >19</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-20"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >20</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-21"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >21</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-22"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 font-semibold text-white"
              >22</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-23"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >23</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-24"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >24</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-25"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >25</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-26"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >26</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-27"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >27</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-28"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >28</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-29"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >29</time
            >
          </button>
          <button
            type="button"
            class="bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-30"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >30</time
            >
          </button>
          <button
            type="button"
            class="rounded-bl-lg bg-white py-1.5 text-gray-900 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-01-31"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >31</time
            >
          </button>
          <button
            type="button"
            class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-02-01"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >1</time
            >
          </button>
          <button
            type="button"
            class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-02-02"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >2</time
            >
          </button>
          <button
            type="button"
            class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-02-03"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >3</time
            >
          </button>
          <button
            type="button"
            class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-02-04"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >4</time
            >
          </button>
          <button
            type="button"
            class="bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-02-05"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >5</time
            >
          </button>
          <button
            type="button"
            class="rounded-br-lg bg-gray-50 py-1.5 text-gray-400 hover:bg-gray-100 focus:z-10"
          >
            <time
              datetime="2022-02-06"
              class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
              >6</time
            >
          </button>
        </div>
        <button
          type="button"
          class="focus:outline-none mt-8 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add event
        </button>
      </div>
      <ol
        class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8"
      >
        <li
          *ngFor="let meeting of meetings"
          class="relative flex space-x-6 py-6 xl:static"
        >
          <img
            [src]="meeting.imageUrl"
            alt=""
            class="h-14 w-14 flex-none rounded-full"
          />
          <div class="flex-auto">
            <h3 class="pr-10 font-semibold text-gray-900 xl:pr-0">
              {{ meeting.name }}
            </h3>
            <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
              <div class="flex items-start space-x-3">
                <dt class="mt-0.5">
                  <span class="sr-only">Date</span>
                  <!-- Heroicon name: solid/calendar -->
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </dt>
                <dd>
                  <time datetime="2022-01-10T17:00"
                    >{{ meeting.date }} at {{ meeting.time }}</time
                  >
                </dd>
              </div>
              <div
                class="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5"
              >
                <dt class="mt-0.5">
                  <span class="sr-only">Location</span>
                  <!-- Heroicon name: solid/location-marker -->
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </dt>
                <dd>{{ meeting.location }}</dd>
              </div>
            </dl>
          </div>
          <div
            class="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
          >
            <div>
              <button
                type="button"
                class="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600"
                id="menu-0-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open options</span>
                <!-- Heroicon name: solid/dots-horizontal -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              </button>
            </div>

            <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
            <div
              class="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-0-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-0-item-0"
                  >Edit</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-0-item-1"
                  >Cancel</a
                >
              </div>
            </div>
          </div>
        </li>

        <!-- More meetings... -->
      </ol>
    </div>
  </div>`,
  styles: [],
})
export class CalendarComponent implements OnInit {
  meetings = [
    {
      id: 1,
      date: 'January 10th, 2022',
      time: '5:00 PM',
      datetime: '2022-01-10T17:00',
      name: 'Leslie Alexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'Starbucks',
    },
    {
      id: 2,
      date: 'January 10th, 2022',
      time: '5:00 PM',
      datetime: '2022-01-10T17:00',
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'Tim Hortons',
    },
    {
      id: 3,
      date: 'January 10th, 2022',
      time: '5:00 PM',
      datetime: '2022-01-10T17:00',
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'Costa Coffee at Braehead',
    },
    {
      id: 4,
      date: 'January 10th, 2022',
      time: '5:00 PM',
      datetime: '2022-01-10T17:00',
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'Silverburn',
    },
    {
      id: 5,
      date: 'January 10th, 2022',
      time: '5:00 PM',
      datetime: '2022-01-10T17:00',
      name: 'Courtney Henry',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      location: 'The Glasgow Green',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
