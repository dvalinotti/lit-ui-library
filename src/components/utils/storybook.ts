/**
 * Return a lorem ipsum string
 * @param sentences
 * @returns {String}
 */
export function loremIpsum(sentences: number = 10): String {
  let template =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus erat, consectetur quis sagittis quis, luctus id neque. Donec ex odio, condimentum nec condimentum a, sodales sit amet mauris. Donec porta laoreet finibus. Ut mollis ex vel est iaculis fermentum. Integer enim risus, dictum sed lacus sit amet, tempor rutrum nisl. Sed diam nunc, maximus vel arcu vitae, pharetra finibus dui. Donec sed congue purus. Donec vulputate dolor eget odio mattis porta. Aenean tempus nunc ut aliquam sagittis. Duis non purus posuere, semper ante ac, tincidunt turpis. Suspendisse at neque ut lorem vulputate ultrices. Nunc nunc justo, blandit fermentum enim nec, consectetur congue risus. Duis molestie lacus eu felis varius, eu lobortis arcu molestie. Mauris mollis elementum vehicula. ';

  return template.split('.').slice(0, sentences).join('.') + '.';
}
