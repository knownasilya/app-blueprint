export default function () {
  // usage {{#liquid-if isTruthy class='up-down'}}{{/liquid-if}}
  this.transition(
    this.hasClass('up-down'),

    this.toModel(true),
    this.use('toDown'),

    this.reverse('toUp')
  );
}
