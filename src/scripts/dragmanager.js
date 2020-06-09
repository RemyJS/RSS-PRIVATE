const sourceZone = document.querySelector('.source');

function DropToActiveZone(elem) {
  const activeZone = document.querySelector('.resualt_active');
  activeZone.append(elem);
}

function DropToSourceZone(elem) {
  sourceZone.append(elem);
}

let dragObject = {};

function onMouseDown(event) {
  if (event.which !== 1) return; // right click
  const puzzle = event.target.closest('.draggable');
  if (!puzzle) return;
  if ((event.target.closest('.source') || event.target.closest('.resualt_active')) == null) return;
  dragObject.elem = puzzle;
  dragObject.downX = event.pageX;
  dragObject.downY = event.pageY;
}

function startDrag() {
  const { avatar } = dragObject;

  document.body.appendChild(avatar);
  avatar.classList.add('dragndrop');
}

function createAvatar() {
  return dragObject.elem;
}

function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}

function onMouseMove(event) {
  if (!dragObject.elem) return; // элемент не зажат

  if (!dragObject.avatar) { // если перенос не начат...
    dragObject.avatar = createAvatar(event);

    const coords = getCoords(dragObject.avatar);
    dragObject.shiftX = dragObject.downX - coords.left;
    dragObject.shiftY = dragObject.downY - coords.top;

    startDrag();
  }
  dragObject.avatar.style.left = `${event.pageX - dragObject.shiftX}px`;
  dragObject.avatar.style.top = `${event.pageY - dragObject.shiftY}px`;
}

function findActiveZone(event, avatar) {
  avatar.hidden = true;
  const zone = document.elementFromPoint(event.clientX, event.clientY);
  avatar.hidden = false;

  if (zone == null) return null;

  return zone.closest('.resualt_active');
}

function finishDrag(event, avatar) {
  const activeZone = findActiveZone(event, avatar);

  if (activeZone) {
    DropToActiveZone(avatar);
  } else {
    DropToSourceZone(avatar);
  }
}

function onMouseUp(e) {
  if (dragObject.avatar) { // если перенос идет
    dragObject.avatar.classList.remove('dragndrop');
    finishDrag(e, dragObject.avatar);
  }
  dragObject = {};
}

function clickZone(event) {
  if (event.which !== 1) return; // right click
  const puzzle = event.target.closest('.draggable');
  if (!puzzle) return;
  if (event.target.closest('.source')) {
    DropToActiveZone(puzzle);
  } else if (event.target.closest('.resualt_active')) {
    DropToSourceZone(puzzle);
  }
}
const dragManagerInit = () => {
  document.onmousemove = onMouseMove;
  document.onmouseup = onMouseUp;
  document.onmousedown = onMouseDown;
  document.onclick = clickZone;
};


export default dragManagerInit;
