import $ from "jquery";
/*
 * ========== SHOW MODAL VIDEO ==========
 */export const showVideo = () => {
  $(function () {
    // Lấy link từ data-src của tag
    var $videoSrc;
    $(".video-popup").click(function () {
      $videoSrc = $(this).data("src");
    });

    $("#modalVideo").on("shown.bs.modal", function () {
      // Cho video autoplay và không hiện các video liên quan
      $("#iframeVideo").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    // Dừng video khi đóng modal
    $("#modalVideo").on("hide.bs.modal", function () {
      $("#iframeVideo").attr("src", "");
    });
  });
};

/*
 * ========== GET YOUTUBE ID ==========
 */
export const getYouTubeID = (url) => {
  if (url) {
    let id = "";
    url = url
      .replace(/(>|<)/gi, "")
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      id = url[2].split(/[^0-9a-z_\-]/i); // eslint-disable-line
      id = id[0];
    } else {
      id = url;
    }

    return id;
  }
};
