export const findAuthor = (userId, users) => {
    return users.find((user) => user.id === userId)
}
