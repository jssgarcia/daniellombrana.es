export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'author', content: 'Daniel Lombraña' },
        {
          name: 'description',
          property: 'og:description',
          content: this.blog.description,
          hid: 'description'
        },
        { property: 'og:title', content: this.blog.title },
        {
          property: 'og:image',
          content: this.ogImg
        },
        {
          name: 'twitter:description',
          content: this.blog.description
        },
        {
          name: 'twitter:image',
          content: this.ogImg
        }
      ],
      title: this.blog.title
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  async asyncData({ app, params, store, payload }) {
    if (params.slug.indexOf('.html') >= 0) {
      params.slug = params.slug.replace('.html', '')
    }
    const slug = `${params.year}-${params.month}-${params.day}-${params.slug}`
    let blogUrl = '/en/blogposts.json'
    if (store.state.locale === 'es') {
      blogUrl = '/es/blogposts.json'
    }
    const blogposts = await app.$axios.$get(blogUrl)
    const blog = blogposts[slug]
    const photo = `img/blog/${blog.icon}.jpg`
    store.commit('setActive', 'blog')
    store.commit('setColor', '#2980b9')
    store.commit('setCoverImg', photo)
    store.commit('setPage', {
      title: blog.title,
      photoAuthor: blog.icon_author,
      photoUrl: blog.icon_url,
      gradient: 'rgba(0,0,0,0.45), rgba(0,0,0,0.45)'
    })

    blog.content = blog.content.replace('<!--more-->', '')
    blog.content = blog.content.replace('{: .img-responsive}', '\n')

    delete blogposts[blog.basename]

    return {
      blog,
      blogposts
    }
  },
  computed: {
    img() {
      return require(`~/assets/${this.$store.state.heroImg}`)
    },
    ogImg() {
      return `${process.env.baseUrl}${this.img}`
    }
  }
}
