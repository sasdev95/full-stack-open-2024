const dummy = (blogs) => 1;

const totalLikes = (blogs) => blogs.reduce((sum, blog) => sum + blog.likes, 0);

const favoriteBlog = (blogs) => {
    const mostLikes = Math.max(...blogs.map((blog) => blog.likes));
    const favorite = blogs.find((blog) => blog.likes === mostLikes);
    return blogs.length === 0
        ? null
        : {
              title: favorite.title,
              author: favorite.author,
              likes: favorite.likes,
          };
};

const mostBlogs = (blogs) => {
    const blogCounts = blogs.reduce((acc, blog) => {
        acc[blog.author] = (acc[blog.author] || 0) + 1;
        return acc;
    }, {});

    let authorWithMostBlogs = null;
    let maxBlogs = 0;

    for (const author in blogCounts) {
        if (blogCounts[author] > maxBlogs) {
            authorWithMostBlogs = author;
            maxBlogs = blogCounts[author];
        }
    }

    if (authorWithMostBlogs === null) {
        return null;
    }

    return { author: authorWithMostBlogs, blogs: maxBlogs };
};

const mostLikes = (blogs) => {
    if (blogs.length === 0) {
        return null;
    }

    const authorLikeCounts = blogs.reduce((acc, blog) => {
        acc[blog.author] = (acc[blog.author] || 0) + blog.likes;
        return acc;
    });

    let authorWithMostLikes = null;
    let maxAuthorLikeCount = 0;

    for (const author in authorLikeCounts) {
        if (authorLikeCounts[author] > maxAuthorLikeCount) {
            authorWithMostLikes = author;
            maxAuthorLikeCount = authorLikeCounts[author];
        }
    }

    return { author: authorWithMostLikes, likes: maxAuthorLikeCount };
};

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes,
};
