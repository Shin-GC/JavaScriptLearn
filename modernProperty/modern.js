const brand = 'Apple';

const ipad = {
  brand,
  title: 'iPad',
};

function getAge() {
  const date = new Date();
  return date.getFullYear() - this.birth + 1;
}

const user1 = {
  getAge,
  name: 'myName',
  birth: 2017,
};

const user2 = {
  name: 'myName',
  birth: 2017,
  getAge() {
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
  },
};