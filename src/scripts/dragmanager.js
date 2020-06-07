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
  dragObject.elem = puzzle;
  // запомним, что элемент нажат на текущих координатах pageX/pageY
  dragObject.downX = event.pageX;
  dragObject.downY = event.pageY;
}

function startDrag() {
  const { avatar } = dragObject;

  document.body.appendChild(avatar);
  avatar.style.zIndex = 10;
  avatar.style.position = 'absolute';
}

function createAvatar() {
  return dragObject.elem;
}

function getCoords(elem) { // кроме IE8-
  const box = elem.getBoundingClientRect();
  return {
    // eslint-disable-next-line no-restricted-globals
    top: box.top + pageYOffset,
    // eslint-disable-next-line no-restricted-globals
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
    dragObject.avatar.style = '';
    finishDrag(e, dragObject.avatar);
  }
  dragObject = {};
}

const dragManagerInit = () => {
  document.onmousemove = onMouseMove;
  document.onmouseup = onMouseUp;
  document.onmousedown = onMouseDown;
};


export default dragManagerInit;
