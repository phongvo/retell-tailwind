import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retell-faqs',
  template: `
    <div class="bg-gray-50">
      <div
        class="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8"
      >
        <h2 class="text-3xl font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
        <div class="mt-8">
          <dl class="divide-y divide-gray-200">
            <div
              *ngFor="let faq of fags"
              class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
            >
              <dt class="text-base font-medium text-gray-900 md:col-span-5">
                {{ faq.question }}
              </dt>
              <dd class="mt-2 md:mt-0 md:col-span-7">
                <p class="text-base text-gray-500">
                  {{ faq.answer }}
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class FaqsComponent implements OnInit {
  fags = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: 'How do you make holy water? ',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus. ',
    },
    {
      id: 3,
      question: 'What do you call someone with no body and no nose? ',
      answer:
        'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem. ',
    },
    {
      id: 4,
      question: 'Why do you never see elephants hiding in trees? ',
      answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. ",
    },
    {
      id: 5,
      question: "Why can't you hear a pterodactyl go to the bathroom? ",
      answer:
        'Because the pee is silent. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa ipsum, aspernatur blanditiis fugiat ullam magnam suscipit deserunt illum natus facilis atque vero consequatur! Quisquam, debitis error. ',
    },
    {
      id: 6,
      question: 'Why did the invisible man turn down the job offer?',
      answer:
        "He couldn't see himself doing it. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet perspiciatis officiis corrupti tenetur. Temporibus ut voluptatibus, perferendis sed unde rerum deserunt eius. ",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
