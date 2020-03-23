function start() {
  console.log("Request handler 'start' was clled.")
}

function upload() {
  console.log("Request handler 'upload' was clled.")
}

exports.start = start;
exports.upload = upload;