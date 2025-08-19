import { Component } from '@angular/core';
import {TabStandard} from '../../../shared/components/tabs/tab-standard/tab-standard';
import {DpdDescription} from '../../../shared/components/drop-down/dpd-description/dpd-description';

@Component({
  selector: 'home-frequently-asked-questions',
  imports: [
    TabStandard,
    DpdDescription
  ],
  templateUrl: './frequently-asked-questions.html',
  styleUrl: './frequently-asked-questions.scss'
})
export class FrequentlyAskedQuestions {

  tabs: {
    nameTab: string;
  }[] = [
    { nameTab: 'Tab 1' },
    { nameTab: 'Tab 2' },
    { nameTab: 'Tab 3' },
  ];

  questions: {
    titleQuestion: string;
    descriptionQuestion: string;
  }[] = [
    { titleQuestion: 'Pregunta 1',
      descriptionQuestion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu at mauris ultricies volutpat. Duis sapien tortor, ornare a leo non, feugiat dictum tortor. Phasellus at libero id nisi tincidunt pellentesque nec et urna. Cras pulvinar nulla vel pulvinar malesuada. Sed vel nulla consequat, semper dui non, maximus risus. Donec id pretium nibh. Proin nec dignissim mi. Morbi pretium malesuada purus nec commodo.\n' +
                            '\n' +
                            'Curabitur tortor odio, lacinia et lacus in, pharetra luctus nisl. Vestibulum mattis felis quis odio facilisis pellentesque. Fusce venenatis laoreet felis vel interdum. Vivamus arcu diam, condimentum vel condimentum at, pharetra a risus.\n' +
                            '\n' +
                            'Nulla porttitor arcu eget lorem tristique aliquet. Sed tincidunt diam eget porta vestibulum. Proin congue augue eu mattis gravida. Donec eget accumsan tellus. Mauris diam sem, aliquet a ante id, fringilla congue libero. Nunc neque tortor, vehicula euismod maximus at, commodo vitae sapien. Pellentesque lobortis urna est, id scelerisque tellus laoreet quis.'
    },
    { titleQuestion: 'Pregunta 2',
      descriptionQuestion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu at mauris ultricies volutpat. Duis sapien tortor, ornare a leo non, feugiat dictum tortor. Phasellus at libero id nisi tincidunt pellentesque nec et urna. Cras pulvinar nulla vel pulvinar malesuada. Sed vel nulla consequat, semper dui non, maximus risus. Donec id pretium nibh. Proin nec dignissim mi. Morbi pretium malesuada purus nec commodo.\n' +
                            '\n' +
                            'Curabitur tortor odio, lacinia et lacus in, pharetra luctus nisl. Vestibulum mattis felis quis odio facilisis pellentesque. Fusce venenatis laoreet felis vel interdum. Vivamus arcu diam, condimentum vel condimentum at, pharetra a risus.\n' +
                            '\n' +
                            'Nulla porttitor arcu eget lorem tristique aliquet. Sed tincidunt diam eget porta vestibulum. Proin congue augue eu mattis gravida. Donec eget accumsan tellus. Mauris diam sem, aliquet a ante id, fringilla congue libero. Nunc neque tortor, vehicula euismod maximus at, commodo vitae sapien. Pellentesque lobortis urna est, id scelerisque tellus laoreet quis.'
    },
    { titleQuestion: 'Pregunta 3',
      descriptionQuestion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu at mauris ultricies volutpat. Duis sapien tortor, ornare a leo non, feugiat dictum tortor. Phasellus at libero id nisi tincidunt pellentesque nec et urna. Cras pulvinar nulla vel pulvinar malesuada. Sed vel nulla consequat, semper dui non, maximus risus. Donec id pretium nibh. Proin nec dignissim mi. Morbi pretium malesuada purus nec commodo.\n' +
                            '\n' +
                            'Curabitur tortor odio, lacinia et lacus in, pharetra luctus nisl. Vestibulum mattis felis quis odio facilisis pellentesque. Fusce venenatis laoreet felis vel interdum. Vivamus arcu diam, condimentum vel condimentum at, pharetra a risus.\n' +
                            '\n' +
                            'Nulla porttitor arcu eget lorem tristique aliquet. Sed tincidunt diam eget porta vestibulum. Proin congue augue eu mattis gravida. Donec eget accumsan tellus. Mauris diam sem, aliquet a ante id, fringilla congue libero. Nunc neque tortor, vehicula euismod maximus at, commodo vitae sapien. Pellentesque lobortis urna est, id scelerisque tellus laoreet quis.'
    },
    { titleQuestion: 'Pregunta 4',
      descriptionQuestion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu at mauris ultricies volutpat. Duis sapien tortor, ornare a leo non, feugiat dictum tortor. Phasellus at libero id nisi tincidunt pellentesque nec et urna. Cras pulvinar nulla vel pulvinar malesuada. Sed vel nulla consequat, semper dui non, maximus risus. Donec id pretium nibh. Proin nec dignissim mi. Morbi pretium malesuada purus nec commodo.\n' +
                            '\n' +
                            'Curabitur tortor odio, lacinia et lacus in, pharetra luctus nisl. Vestibulum mattis felis quis odio facilisis pellentesque. Fusce venenatis laoreet felis vel interdum. Vivamus arcu diam, condimentum vel condimentum at, pharetra a risus.\n' +
                            '\n' +
                            'Nulla porttitor arcu eget lorem tristique aliquet. Sed tincidunt diam eget porta vestibulum. Proin congue augue eu mattis gravida. Donec eget accumsan tellus. Mauris diam sem, aliquet a ante id, fringilla congue libero. Nunc neque tortor, vehicula euismod maximus at, commodo vitae sapien. Pellentesque lobortis urna est, id scelerisque tellus laoreet quis.'
    },{ titleQuestion: 'Pregunta 5',
      descriptionQuestion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu at mauris ultricies volutpat. Duis sapien tortor, ornare a leo non, feugiat dictum tortor. Phasellus at libero id nisi tincidunt pellentesque nec et urna. Cras pulvinar nulla vel pulvinar malesuada. Sed vel nulla consequat, semper dui non, maximus risus. Donec id pretium nibh. Proin nec dignissim mi. Morbi pretium malesuada purus nec commodo.\n' +
                            '\n' +
                            'Curabitur tortor odio, lacinia et lacus in, pharetra luctus nisl. Vestibulum mattis felis quis odio facilisis pellentesque. Fusce venenatis laoreet felis vel interdum. Vivamus arcu diam, condimentum vel condimentum at, pharetra a risus.\n' +
                            '\n' +
                            'Nulla porttitor arcu eget lorem tristique aliquet. Sed tincidunt diam eget porta vestibulum. Proin congue augue eu mattis gravida. Donec eget accumsan tellus. Mauris diam sem, aliquet a ante id, fringilla congue libero. Nunc neque tortor, vehicula euismod maximus at, commodo vitae sapien. Pellentesque lobortis urna est, id scelerisque tellus laoreet quis.'
    },
  ];
}
