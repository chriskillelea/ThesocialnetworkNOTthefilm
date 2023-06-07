const router = require('express').Router();

const {
    getUserById,
    getAllUser,
    updateUser,
    createUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUser)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;