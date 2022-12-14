const authSocket = require("./middleware/authSocket");
const { setSocketServerInstance, getOnlineUsers } = require("./serverStore");
const directChatHistoryHandler = require("./socketHandlers/directChatHistoryHandler");
const directMessageHandler = require("./socketHandlers/directMessageHandler");
const disconnectHandler = require("./socketHandlers/disconnectHandler");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  setSocketServerInstance(io);

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  const emitOnlineUsers = () => {
    const onlineUsers = getOnlineUsers();

    io.emit("online-users", { onlineUsers });
  };

  io.on("connection", (socket) => {
    console.log("socket connected");
    console.log(socket.id);
    newConnectionHandler(socket, io);
    emitOnlineUsers();

    socket.on("direct-message", (data) => {
      directMessageHandler(socket, data);
    });

    socket.on("direct-chat-history", (data) => {
      directChatHistoryHandler(socket, data);
    });
    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });

    setInterval(() => {
      emitOnlineUsers();
    }, [1000 * 20]);
  });
};

module.exports = {
  registerSocketServer,
};
