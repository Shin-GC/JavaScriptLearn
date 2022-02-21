const { Post } = require('./models')

async function main() {
  const created = await Post.create({
    title: 'first title',
    content:'first content'
  })

  const item1 = {
    title: "secnond title",
    content: "secnond content"
  }
  const item2 = {
    title: "third title",
    content: "third content"
  }


  const multipleCreated = await Post.create([
    item1,
    item2
  ]);
}