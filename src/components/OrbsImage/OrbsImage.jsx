function OrbsImage({ selectedVideos }) {
  return (
    <video
      className="selectedorbs"
      poster={`http://localhost:8080/${selectedVideos.image}`}
      controls
    ></video>
  );
}

export default OrbsImage;
