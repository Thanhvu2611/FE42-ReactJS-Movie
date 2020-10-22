import React from "react";
export default function ModalVideo() {
  return (
    <div>
      <div className="modal-video">
        <div
          className="modal fade"
          id="modalVideo"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="movie-btn--close"
                  data-dismiss="modal"
                >
                  ×
                </button>
                {/* 16:9 aspect ratio */}
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="video"
                    className="embed-responsive-item"
                    id="iframeVideo"
                    frameBorder={0}
                    allow="accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
