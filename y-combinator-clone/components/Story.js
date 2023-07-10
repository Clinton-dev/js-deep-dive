export default function Story({
  index,
  title,
  domain,
  url,
  points,
  user,
  time_ago,
  id,
  comments_count,
}) {
  return `<div class="story">
  <div>
    <span class="gray">${index || ""}</span>
    <span class="upvote">▲</span>
    <a href="${url}">${title}</a>
    <span>(${domain})</span>
  </div>
  <div>
    <div class="gray">
        ${points} points by ${user} ${time_ago} |
        <a href='#/item?id=${id}'>
            ${comments_count} comments
        </a>
        |
        <span class="favorite">
            <img class="heart" src="../images/heart_rate_icon.svg">
            Add to favorites
        </span>
    </div>
  </div>
  </div>`;
}
