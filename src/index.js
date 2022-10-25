export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person) === true) {
      throw new Error('Персонаж уже существует');
    }
    this.members.add(person);
  }

  addAll(...person) {
    person.forEach((item) => {
      this.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
