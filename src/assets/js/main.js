import $ from "jquery";
import swal from "sweetalert";
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
//
//
//



/*
 * ========== ALERT FUNCTIONS ==========
 */
export const alertGeneralAction = (
  closeOnClickOutside = true,
  title = "Thành công",
  icon = "success",
  buttons = { closeModal: "Đóng" },
  text = ""
) => {
  return swal({
    closeOnClickOutside,
    title,
    icon,
    buttons,
    text,
  });
};

export const alertConfirmation = (
  closeOnClickOutside,
  title,
  callbackBtn1,
  callbackBtn2,
  icon = "warning",
  button = { chooseYes: "Đồng ý", chooseNo: "Không" },
  text = ""
) => {
  alertGeneralAction(closeOnClickOutside, title, icon, button, text).then(
    (value) => {
      let btnArray = Object.entries(button);
      let btn1 = btnArray[0][0];
      let btn2 = btnArray[1][0];
      console.log(btn1, btn2);
      switch (value) {
        case btn1:
          return callbackBtn1 ? callbackBtn1() : null;
        case btn2:
          return callbackBtn2 ? callbackBtn2() : null;
        default:
          break;
      }
    }
  );
};

export const alertGeneralErrAPI = (errAPI) => {
  let errMess = errAPI;

  if (errAPI && errAPI.response && errAPI.response.data) {
    errMess = errAPI.response.data;
  } else if (errAPI && errAPI.message) {
    errMess = errAPI.message;
  }
  alertGeneralAction(false, errMess, "error");
};

export const alertSuccessfulLogin = () => {
  alertGeneralAction(true, "Đăng nhập thành công", "success", {
    closeModal: "Đóng",
  }).then(() => {
    if ($("#modalAuth")) {
      $("#modalAuth").modal("hide");
    }
  });
};

export const alertSuccessfulRegister = () => {
  alertConfirmation(
    false,
    "Đăng ký thành công",
    () => {
      $("#signInUpTab #signIn-tab").tab("show");
      $("#modalAuth").find("input,textarea,select").val("").end();
    },
    () => {
      $("#modalAuth").modal("toggle");
      $("#modalAuth").find("input,textarea,select").val("").end();
    },
    "success",
    {
      mainAction: "Đăng nhập ngay",
      closeModal: "Đóng",
    }
  );
};

export const alertSuccessfulBooking = (serverMess, callback) => {
  alertGeneralAction(
    false,
    serverMess,
    "success",
    { closeModal: "Đóng" },
    "Xin cám ơn"
  ).then(() => {
    callback();
  });
};

export const alertFailedBooking = (callback) => {
  alertGeneralAction(
    false,
    "Đã hết thời gian giữ ghế",
    "error",
    "Đặt vé lại",
    "Vui lòng thực hiện đơn hàng trong thời gian quy định"
  ).then(() => {
    callback();
  });
};

export const alertPleaseLogin = () => {
  alertGeneralAction(true, "Vui lòng đăng nhập", null, {
    closeModal: "Đóng",
  }).then(() => {
    $("#modalAuth").modal("toggle");
    $("#signInUpTab #signIn-tab").tab("show");
  });
};

/*
 * ========== SLICK FUNCTIONS ==========
 */
export const createSlickCarousel = () => {
  $(function () {
    $(".movie-carousel").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      nextArrow:
        '<img src="/assets/img/icon/next-session.png"="" class= "right"/>',
      prevArrow:
        '<img src="/assets/img/icon/back-session.png"="" class= "left"/>',
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
};

export const createSlickMovieList = () => {
  $(function () {
    $(".movie-list__slick")
      .not(".slick-initialized")
      .slick({
        slidesPerRow: 4,
        rows: 2,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        nextArrow:
          '<img src="/assets/img/icon/next-session.png"="" class= "right"/>',
        prevArrow:
          '<img src="/assets/img/icon/back-session.png"="" class= "left"/>',
        responsive: [
          {
            breakpoint: 879,
            settings: {
              slidesPerRow: 3,
            },
          },
          {
            breakpoint: 737,
            settings: "unslick",
          },
        ],
      });
  });
  // Fix Slick tab-pane
  $(function () {
    $('.nav-tabs a[data-toggle="tab"]').on("shown.bs.tab", function () {
      $(".movie-list__slick").slick("setPosition");
    });
  });
};

export const createSlickMovieApp = () => {
  $(function () {
    $(".movie-app__right-content").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
};

/*
 * ========== GET THE HTML CONTENT OF THE DROPDOWN-ITEM ==========
 */
export const getDropdownItem = (classDropdownItem, classDropdownValue) => {
  let dropdownItem = [...document.querySelectorAll(classDropdownItem)];
  for (let item of dropdownItem) {
    item.addEventListener("click", () => {
      document.querySelector(classDropdownValue).innerHTML = item.innerHTML;
    });
  }
};

/*
 * ========== SHOW MODAL VIDEO ==========
 */
// export const showVideo = () => {
//   $(function () {
//     // Lấy link từ data-src của tag
//     var $videoSrc;
//     $(".video-popup").click(function () {
//       $videoSrc = $(this).data("src");
//     });

//     $("#modalVideo").on("shown.bs.modal", function () {
//       // Cho video autoplay và không hiện các video liên quan
//       $("#iframeVideo").attr(
//         "src",
//         $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
//       );
//     });

//     // Dừng video khi đóng modal
//     $("#modalVideo").on("hide.bs.modal", function () {
//       $("#iframeVideo").attr("src", "");
//     });
//   });
// };

/*
 * ========== VIEW MORE BUTTON ==========
 */
export const viewMore = (id, itemsClass, initNumItems, addNumItems) => {
  // initNumItems: số items muốn hiển thị ban đầu
  // addNumItems: số items muốn hiển thị thêm khi click vào nút viewMore
  // distance: mặc định bằng height của header: 60 px
  $(async function () {
    // Ẩn tất cả news__content của id
    $(`${id} ${itemsClass}`).hide();

    // Chỉ hiện ra initNumItems news__content của id
    $(`${id} ${itemsClass}`).slice(0, initNumItems).show();

    // Nếu chỉ có 1 news__content thì ẩn đi nút view-more-btn
    if ($(`${id} ${itemsClass}`).length === 1) {
      $(`${id} .view-more-btn`).fadeOut("slow");
    }

    $(`${id} .view-more-btn`).on("click", function () {
      /*
       * Phải đặt hàm này trước khi hiện ra thêm nội dung
       * để không gây lỗi UI vì effect fadeIn bất đồng bộ.
       * (Dùng effect slideDown bị lỗi UI)
       */
      $("html,body").animate(
        {
          // Giữ nguyên vị trí của scrollbar
          scrollTop: $(window).scrollTop(),
        },
        100
      );

      // Click & hiện ra thêm addNumItems news__content
      $(`${id} ${itemsClass}:hidden`).slice(0, addNumItems).fadeIn(500);

      // Nếu không còn news__content nào đang ẩn thì ẩn đi nút view-more-btn
      if ($(`${id} ${itemsClass}:hidden`).length === 0) {
        $(`${id} .view-more-btn`).fadeOut("slow");
      }
    });
  });
};

// VIEW MORE BUTTON FOR MOVIE LIST
export const viewMoreMovieList = (initNumItems = 4, addNumItems = 10) => {
  if (window.innerWidth <= 736) {
    ["#showing", "#coming"].forEach((id) => {
      viewMore(id, ".movie-list__item", initNumItems, addNumItems);
    });
  }

  let reloadMovieList = false;
  if (localStorage.getItem("reloadMovieList")) {
    reloadMovieList = JSON.parse(localStorage.getItem("reloadMovieList"));
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 736 && reloadMovieList === false) {
      ["#showing", "#coming"].forEach((id) => {
        viewMore(id, ".movie-list__item", initNumItems, addNumItems);
      });
      reloadMovieList = true;
      localStorage.setItem("reloadMovieList", JSON.stringify(reloadMovieList));
      window.location.reload();
    } else if (window.innerWidth > 736 && reloadMovieList) {
      reloadMovieList = false;
      localStorage.setItem("reloadMovieList", JSON.stringify(reloadMovieList));
      window.location.reload();
    }
  });
};

/*
 * ========== GET YOUTUBE ID ==========
 */
// export const getYouTubeID = (url) => {
//   if (url) {
//     let id = "";
//     url = url
//       .replace(/(>|<)/gi, "")
//       .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
//     if (url[2] !== undefined) {
//       id = url[2].split(/[^0-9a-z_\-]/i); // eslint-disable-line
//       id = id[0];
//     } else {
//       id = url;
//     }

//     return id;
//   }
// };

/*
 * ========== SHOW SCORE CIRCLE ==========
 */
export const showScoreCircle = () => {
  let movieScore = parseInt(
    document.querySelector(".movie-details-intro .movie-score").innerHTML
  );

  const perCirc = ($el, end, i) => {
    if (end < 0) end = 0;
    else if (end > 10) end = 10;

    if (typeof i === "undefined") i = 0;

    var curr = (10 * i) / 360;
    $el.find(".perCircStat").html(Math.round(curr) + "/10"); // * "/10"
    if (i <= 180) {
      $el.css(
        "background-image",
        "linear-gradient(" +
          (90 + i) +
          "deg, transparent 50%, #ccc 50%),linear-gradient(90deg, #ccc 50%, transparent 50%)"
      );
    } else {
      $el.css(
        "background-image",
        "linear-gradient(" +
          (i - 90) +
          "deg, transparent 50%, #fa5238 50%),linear-gradient(90deg, #ccc 50%, transparent 50%)"
      ); // ! Chỉ được đổi màu #fa5238
    }

    if (curr < end) {
      perCirc($el, end, ++i);
      // setTimeout(function () {
      // perCirc($el, end, ++i); // * Thay đổi tốc độ quay ở i+
      // }, 0);
    }
  };

  perCirc($("#sellPerCirc"), movieScore); // * Điền score
};

/*
 * ========== SMOOTH SCROLL ==========
 */
export const smoothScroll = (distance1 = 30, distance2 = 30) => {
  $(function () {
    $(".movie-nav .nav-link, .intro-content__info .movie-btn--orange").on(
      "click",
      function () {
        if (this.hash !== "") {
          /*
           * (this là tag được click)
           * this: <a class="nav-item nav-link" href="/#movieList">Danh sách phim</a>
           * hash: #movieList
           */
          var hash = this.hash;

          // console.log($(hash).offset());
          /*
           * Output: {top: 814.921875, left: 221.5}
           * offset là tọa độ vị trí (y,x) của tag (có id="movieList") trên viewport
           * VD: top là vị trí của tag cách cạnh trên cùng của viewport là 814px
           */

          // ! Dành cho scroll chỉ trong 1 trang
          if ($(hash).offset() !== undefined) {
            $("html, body").animate(
              {
                // scroll đến vị trí của tag hash và cách tag này 15px
                scrollTop: $(hash).offset().top - distance1,
              },
              500
            );
            // ! Dành cho khi đang ở 1 trang khác
          } else {
            /*
             * Nếu đang ở một trang khác mà click vô, cần sau 1500ms (chờ chuyển trang)
             * rồi DOM tới id của section $(hash).offset(). Nếu không thì
             * $(hash).offset() (vị trí) sẽ trả về undefined do section hiện không tồn tại
             * ở trang đó dẫn đến lỗi.
             * Kết hợp với component ScrollToTop để khi chuyển trang bằng thẻ Link,
             * tự động scroll về top, sau đó chạy code dưới để scroll đến section
             */
            setTimeout(() => {
              $("html, body").animate(
                {
                  // scroll đến vị trí của tag có ID hash tương ứng và cách tag này 10px
                  scrollTop: $(hash).offset().top - distance2,
                },
                500
              );
            }, 1100);
          }
        }
      }
    );
  });
};

/*
 * ========== SCROLL TOP ==========
 */
export const scrollTop = () => {
  // CSS opacity, visibility
  window.onscroll = function () {
    // scroll > 400 thi hien nut
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      $(".movie-btn--bttop").css({
        visibility: "visible",
        opacity: "1",
      });
    } else {
      $(".movie-btn--bttop").css({
        visibility: "hidden",
        opacity: "0",
      });
    }
  };

  // Click
  $(function () {
    $(".movie-btn--bttop").on("click", function () {
      $("html, body").animate({ scrollTop: "0px" }, 500);
    });
  });
};

/*
 * ========== REPLACE DAY ==========
 */
export const replaceDay = () => {
  if (window.innerWidth <= 600) {
    let listDay = [
      ...document.querySelectorAll("#lichChieu .day-of-week__item h6"),
    ];
    listDay.forEach((item) => {
      item.innerHTML = item.innerHTML.replace("Thứ ", "T");
      item.innerHTML = item.innerHTML.replace("Chủ nhật", "CN");
    });
  }
};

/*
 * ========== CLEAR MODAL ==========
 */
export const clearModal = (modalID) => {
  $(`#${modalID}`).on("hidden.bs.modal", function () {
    $(`#${modalID}`).find("input,textarea,select").val("").end();
  });
};

/*
 * ========== COUNTDOWN TIMER ==========
 */
export let BookingTimer; // To clear timeout on the navigation (React router)

export const countdownTimer = (sec = 60, callback) => {
  let isSuccess = false;
  document.getElementById("buy-ticket").addEventListener("click", () => {
    isSuccess = true; // ! Khi nhấn vào nút đặt thì stop time
  });

  let mins; // ! Không thay đổi
  let secs = sec; // ! Chỉ thay đổi sec
  Decrement();

  function Decrement() {
    if (isSuccess) {
      return;
    }

    if (document.getElementById) {
      var minutes = document.getElementById("minutes");
      var seconds = document.getElementById("seconds");

      // if less than a minute remaining
      if (seconds < 59) {
        seconds.innerHTML = secs;
      } else {
        minutes.innerHTML = getminutes();
        seconds.innerHTML = getseconds();
      }

      secs--;

      // eslint-disable-next-line
      if (minutes.innerHTML == 0 && seconds.innerHTML == 0) {
        callback();
        return;
      } else {
        BookingTimer = setTimeout(function () {
          Decrement();
        }, 1000);
      }
    }
  }

  function getminutes() {
    mins = Math.floor(secs / 60);
    return mins < 10 ? "0" + mins : mins;
  }

  function getseconds() {
    return secs - Math.round(mins * 60) < 10
      ? "0" + (secs - Math.round(mins * 60))
      : secs - Math.round(mins * 60);
  }
};

/*
 * ========== TOOGLE COMBO DETAILS ==========
 */
export const toggleComboDetails = () => {
  document.getElementById("comboDetails").classList.toggle("show");
  document
    .querySelector(".booking__right-combo")
    .classList.toggle("open-combo");
};
