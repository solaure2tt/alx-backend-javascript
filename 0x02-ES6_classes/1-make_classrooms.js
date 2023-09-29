import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const res = new Array(3);
  res[0] = new ClassRoom(19);
  res[1] = new ClassRoom(20);
  res[2] = new ClassRoom(34);
  return res;
}
