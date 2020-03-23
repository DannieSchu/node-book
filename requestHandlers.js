function start() {
  console.log("Request handler 'start' was clled.");
  return 'Hello Start';
}

function upload() {
  console.log("Request handler 'upload' was clled.");
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;