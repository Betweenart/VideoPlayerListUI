'use strict';

/**
 * @ngdoc function
 * @name videoPlayerListUiApp.controller:PodCastCtrl
 * @description
 * # PodCastCtrl
 * Controller of the videoPlayerListUiApp
 */
angular.module('videoPlayerListUiApp')
  .controller('PodCastCtrl', function ($rootScope, $scope, PodCastList, $log) {
    $rootScope.activePage = 'podCast';

    var feedUrl = 'http://rss.cnn.com/services/podcasting/sitroom/rss.xml',
      maxCount = 10;

    $scope.podListButtonUpName = 'Move Up';
    $scope.podListButtonDownName = 'Move Down';
    $scope.podCast = null;

    // get feed from wherever we need
    PodCastList.get(feedUrl, maxCount).then(function (data) {
      $scope.podCast = data.responseData.feed;

      // parse date for display filter
      if ($scope.podCast.entries) {
        for (var i = 0; i < $scope.podCast.entries.length; i++) {
          $scope.podCast.entries[i].publishedDate = new Date($scope.podCast.entries[i].publishedDate);
        }
      }
      $log.debug($scope.podCast);

      // initalize the ui class
      setTimeout(function () {
        videoListClass.init('podListButtonUp', 'podListButtonDown', 'podListVideos', $scope.podCast.entries, 'podVideoPlayer', 'podVideoDescription');
      }, 1);
    });

    $scope.activeVideoDescription = 'short description';

    /**
     * Controlls the video list UI scrolling, buttons and playback
     * @class videoListClass
     * @type {{init: Function, addListeners: Function, moveListUp: Function, moveListDown: Function, selectVideo: Function, deselectVideo: Function, selectVideoUp: Function, selectVideoDown: Function, playVideo: Function, updateDescription: Function}}
     */
    var videoListClass = {
      init: function (buttonUpId, buttonDownId, listId, videoEntries, playerId) {
        if (!buttonUpId || !buttonDownId || !listId || !videoEntries || !playerId) {
          return console.warn('missing parameters');
        }

        this.entries = videoEntries || [];
        this.buttonUp = $('#' + buttonUpId);
        this.buttonDown = $('#' + buttonDownId);
        this.podList = $('#' + listId);
        this.videosList = this.podList.find('li');
        this.firstElement = this.videosList[0];
        this.elHeight = this.firstElement.offsetHeight;
        this.visibleElements = 4;

        this.playing = null;
        this.player = $('#' + playerId);

        this.selected = 0;
        this.buttonUp.focus();
        this.selectVideo(this.selected);
        this.addListeners();
      },
      addListeners: function () {
        var _this = this;
        this.buttonUp.on('keydown', function (event) {
          event.preventDefault();
          console.log(event.keyCode);
          switch (event.keyCode) {
            case 13:
              _this.playVideo();
              break;
            case 38:
            case 32:
              _this.moveListUp();
              break;
            case 40:
              _this.buttonDown.focus();
              break;
            default:
              break;
          }
        });

        this.buttonDown.on('keydown', function (event) {
          event.preventDefault();
          console.log(event.keyCode);
          switch (event.keyCode) {
            case 13:
              _this.playVideo();
              break;
            case 38:
              _this.buttonUp.focus();
              break;
            case 40:
            case 32:
              _this.moveListDown();
              break;
            default:
              break;
          }
        });

      },
      moveListUp: function () {
        console.log('up', this.selected);
        if (this.selected === 0) {
          return console.info('first element');
        }

        if (this.selected === 1) {
          this.firstElement.style.marginTop = '0px';
        } else if (this.selected === this.videosList.length - 1) { // last element
          this.firstElement.style.marginTop = (parseInt(this.firstElement.style.marginTop, 10) + this.elHeight / 3) + 'px';
        } else if (this.selected === this.videosList.length - 2 || this.selected === this.videosList.length - 3) {
          // only select up
        } else {
          this.firstElement.style.marginTop = (parseInt(this.firstElement.style.marginTop, 10) + this.elHeight) + 'px';
        }

        this.selectVideoUp();
      },
      moveListDown: function () {
        console.log('down', this.selected);
        if (this.selected === this.videosList.length - 1) { // last element
          return console.info('last element');
        }

        if (this.selected === 0 || this.selected === 1 || this.selected === 2) {
          //just select
        } else if (this.selected === 3) {
          this.firstElement.style.marginTop = -(this.elHeight + (this.elHeight / 3)) + 'px';
        } else if (this.selected === this.videosList.length - 2) {
          this.firstElement.style.marginTop = -((this.videosList.length - this.visibleElements) * this.elHeight) + this.elHeight / 3 + 'px';
        } else {
          this.firstElement.style.marginTop = (parseInt(this.firstElement.style.marginTop, 10) - this.elHeight) + 'px';
        }
        this.selectVideoDown();
      },
      selectVideo: function () {
        if (this.videosList && this.videosList.length > 0) {
          this.videosList[this.selected].classList.add('active');
        }
      },
      deselectVideo: function () {
        if (this.videosList && this.videosList.length > 0) {
          this.videosList[this.selected].classList.remove('active');
        }
      },
      selectVideoUp: function () {
        this.deselectVideo();
        this.selected -= 1;
        this.selectVideo();
      },
      selectVideoDown: function () {
        this.deselectVideo();
        this.selected += 1;
        this.selectVideo();
      },
      playVideo: function () {
        console.log('playVideo');
        if (!this.player) {
          return console.warn('missing player');
        }

        if (this.playing === this.selected) {
          if (this.player[0].paused) {
            this.player[0].play();
          } else {
            this.player[0].pause();
          }
        } else {
          this.player[0].src = this.entries[this.selected].mediaGroups[0].contents[0].url;
          this.player[0].load();
          this.player[0].play();
          this.playing = this.selected;
        }

        this.updateDescription();
      },
      updateDescription: function () {
        $scope.activeVideoDescription = this.entries[this.selected].contentSnippet;
        $scope.$apply();
      }
    };

  });
