const refreshMessages = (message) => {
  messages.innerHTML += `
    <li
      class="
        list-group-item
        d-flex
        flex-row
        align-items-center
        text-break
      "
    >
      <div class="w-25 p-3 border-end">${message.author}</div>
      <div class="w-75 p-3">${message.content}</div>
    </li>`;
  setTimeout(() => {
    messages.scroll({
      behavior: "smooth",
      top: 99999999999999999999999999999999999,
    });
  }, 100);
};

const formatDate = (stamp) => {
  const date = new Date(stamp);
  const hour = "0" + date.getHours();
  const minutes = "0" + date.getMinutes();
  const format = hour.substr(-2) + ":" + minutes.substr(-2);
  return format;
};
