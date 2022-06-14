let users = require('../mocks/users');

module.exports = {
  listUsers: function (request, response) {
 
    const sortedUsers = users.sort((prev, next) => {
      if ( request.query.order === 'desc' ) {
        return prev.id < next.id ? 1 : -1;
      } else {
        return prev.id > next.id ? 1 : -1;
      }
    })
    response.send(200, sortedUsers);
  },

  getUserById: function(request, response){
    const { id } = request.params;

    const user = users.find((user) => user.id === Number(id));  
      if (user) {
        response.send(200, user);
      } else {
        response.send(400, {user: 'Not Found'});
      }
  },

  createUser: function(request, response) {
    const lastUserId = users[users.length -1].id;
    const { body } = request;
    
    const newUser = {
      name: body.name,
      id: lastUserId + 1,
    }
    users.push(newUser);
    response.send(200, newUser);
  },

  updateUser: function(request, response) {
    let { id } = request.params;
    const { name } = request.body;
    id = Number(id);

    const userExists = users.find(user => user.id === id);
    if (!userExists) {
      return response.send(400, { error: 'User not found' });
    }
    users = users.map(user => user.id === id ? {...user, name}: user);

    response.send(200, { name, id });
  },
  
  deleteUser: function(request, response) {
    let { id } = request.params;
    id = Number(id);

    users = users.filter(user => user.id !== id);

    response.send(200, { deleted: true });
  }
} 