import { PrismaClient } from '@prisma/client';

let prisma = undefined
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export async function getLikesForAllPosts() {
  const likes = await prisma.likes.count();
  return likes
}

export async function getLikesForOnePost(postId) {
  const likes = await prisma.likes.count({
    where: {
      postId: postId
    }
  });
  return likes
}

export async function getLikedByUserForOnePost(userId, postId) {
  const liked = await prisma.likes.count({
    where: {
      userId: userId,
      postId: postId
    }
  })
  return liked ? true : false
}

export async function postLikedByUserForOnePost(userId, postId) {
  const likeExist = await prisma.likes.count({
    where: {
      userId: userId,
      postId: postId
    }
  })
  let result = undefined
  if (likeExist > 0) {
    result = await prisma.likes.deleteMany({
      where: {
        userId: userId,
        postId: postId
      },
    });
  } else {
    result = await prisma.likes.create({
      data: {
        userId: userId,
        postId: postId
      },
    });
  }
  return result
}

export async function getBookmarksForAllPosts() {
  const bookmarks = await prisma.bookmarks.count();
  return bookmarks
}

export async function getBookmarksForOnePost(postId) {
  const bookmarks = await prisma.bookmarks.count({
    where: {
      postId: postId
    }
  });
  return bookmarks
}

export async function getBookmarkedByUserForOnePost(userId, postId) {
  const bookmarked = await prisma.bookmarks.count({
    where: {
      userId: userId,
      postId: postId
    }
  })
  return bookmarked ? true : false
}

export async function postBookmarkedByUserForOnePost(userId, postId) {
  const bookmarkExist = await prisma.bookmarks.count({
    where: {
      userId: userId,
      postId: postId
    }
  })
  let result = undefined
  if (bookmarkExist > 0) {
    result = await prisma.bookmarks.deleteMany({
      where: {
        userId: userId,
        postId: postId
      },
    });
  } else {
    result = await prisma.bookmarks.create({
      data: {
        userId: userId,
        postId: postId
      },
    });
  }
  return result
}