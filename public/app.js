'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_React$Component) {
  _inherits(Chat, _React$Component);

  function Chat(props) {
    _classCallCheck(this, Chat);

    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

    _this.state = {
      videoHasStarted: false
    };
    _this.requestVideoCall = _this.requestVideoCall.bind(_this);
    return _this;
  }

  _createClass(Chat, [{
    key: 'returnSubmit',
    value: function returnSubmit(e) {
      if (e.charCode === 13) {
        e.preventDefault();
        $('form').submit();
      }
    }
  }, {
    key: 'renderEnlargeButton',
    value: function renderEnlargeButton() {
      var button = document.createElement('button');
      button.id = 'enlarge';
      var img = document.createElement('img');
      img.src = 'enlarge.svg';
      img.width = '25';
      img.height = '25';
      button.appendChild(img);
      button.onclick = function () {};
      document.body.appendChild(button);
    }
  }, {
    key: 'renderEndButton',
    value: function renderEndButton() {
      var button = document.createElement('button');
      button.id = 'end-call';
      var img = document.createElement('img');
      img.src = 'end_call.svg';
      img.width = '190';
      img.height = '38';
      button.appendChild(img);
      button.onclick = function () {};
      document.body.appendChild(button);
    }
  }, {
    key: 'requestVideoCall',
    value: function requestVideoCall(e) {
      if (window.offerer) {
        if (!document.getElementById(window.offerer)) peer.sendParticipationRequest(window.offerer);
      }
      document.getElementById('pop-up').style.opacity = '0.4';
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      var text = $('#m').val();
      text = text + '⍄' + peer.userid;
      $('#m').val(text);
      $('form').submit();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { action: '', style: this.props.styles },
        React.createElement('textarea', { id: 'm', onKeyPress: this.returnSubmit }),
        React.createElement(
          'div',
          { className: 'btns' },
          React.createElement(
            'button',
            { type: 'submit' },
            React.createElement('img', { src: 'chat.svg', width: '22px', height: '22px' })
          ),
          React.createElement(
            'button',
            { onClick: this.requestVideoCall },
            React.createElement('img', { src: 'video.svg', width: '22px', height: '22px' })
          )
        )
      );
    }
  }]);

  return Chat;
}(React.Component);

var ChatInfo = function (_React$Component2) {
  _inherits(ChatInfo, _React$Component2);

  function ChatInfo(props) {
    _classCallCheck(this, ChatInfo);

    return _possibleConstructorReturn(this, (ChatInfo.__proto__ || Object.getPrototypeOf(ChatInfo)).call(this, props));
  }

  _createClass(ChatInfo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'window', style: this.props.styles },
        React.createElement(
          'p',
          null,
          'Please enter the name of the person you would like to speak to:'
        ),
        React.createElement('input', { id: 'input1', type: 'text' }),
        React.createElement(
          'p',
          null,
          'And your name:'
        ),
        React.createElement('input', { id: 'input2', type: 'text' }),
        React.createElement('input', { type: 'submit', onClick: this.props.formSubmit })
      );
    }
  }]);

  return ChatInfo;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = {
      chatStyles: {
        display: 'none'
      },
      formStyles: {
        display: 'block'
      },
      user1: '',
      user2: ''
    };
    _this3.handleFormSubmit = _this3.handleFormSubmit.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(e) {
      e.preventDefault();
      var text1 = document.getElementById('input1').value;
      var text2 = document.getElementById('input2').value;
      this.setState({ user1: text2 });
      this.setState({ user2: text1 });
      this.setState({ formStyles: { display: 'none' } });
      this.setState({ chatStyles: { display: 'flex' } });
      var el = document.createElement('p');
      el.style.color = 'transparent';
      el.style.height = '0';
      el.id = 'users';
      el.innerHTML = text2 + ' > ' + text1;
      var el1 = document.createElement('h2');
      var el2 = document.createElement('h2');
      el1.innerHTML = text2.slice(0, 1);
      el2.innerHTML = text1.slice(0, 1);
      var avatars = document.createElement('div');
      avatars.className = 'avatars';
      avatars.appendChild(el1);
      avatars.appendChild(el2);
      document.getElementById('pop-up').appendChild(el);
      document.getElementById('pop-up').appendChild(avatars);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'pop-up' },
        React.createElement(
          'span',
          null,
          'Chat'
        ),
        React.createElement(
          'h5',
          null,
          'ask something or mention anything to your point of contact'
        ),
        React.createElement(ChatInfo, { styles: this.state.formStyles, formSubmit: this.handleFormSubmit }),
        React.createElement('ul', { id: 'messages' }),
        React.createElement(Chat, { users: [this.state.user1, this.state.user2], styles: this.state.chatStyles })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkNoYXQiLCJwcm9wcyIsInN0YXRlIiwidmlkZW9IYXNTdGFydGVkIiwicmVxdWVzdFZpZGVvQ2FsbCIsImJpbmQiLCJlIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIiQiLCJzdWJtaXQiLCJidXR0b24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJvbmNsaWNrIiwiYm9keSIsIndpbmRvdyIsIm9mZmVyZXIiLCJnZXRFbGVtZW50QnlJZCIsInBlZXIiLCJzZW5kUGFydGljaXBhdGlvblJlcXVlc3QiLCJzdHlsZSIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0IiwidmFsIiwidXNlcmlkIiwic3R5bGVzIiwicmV0dXJuU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJDaGF0SW5mbyIsImZvcm1TdWJtaXQiLCJBcHAiLCJjaGF0U3R5bGVzIiwiZGlzcGxheSIsImZvcm1TdHlsZXMiLCJ1c2VyMSIsInVzZXIyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInRleHQxIiwidmFsdWUiLCJ0ZXh0MiIsInNldFN0YXRlIiwiZWwiLCJjb2xvciIsImlubmVySFRNTCIsImVsMSIsImVsMiIsInNsaWNlIiwiYXZhdGFycyIsImNsYXNzTmFtZSIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBWTtBQUNWQyx1QkFBaUI7QUFEUCxLQUFaO0FBR0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBTGlCO0FBTWxCOzs7O2lDQUNZQyxDLEVBQUc7QUFDZCxVQUFJQSxFQUFFQyxRQUFGLEtBQWUsRUFB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LE9BQWhCLEVBQXlCL0MsU0FBU1ksY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID17XG4gICAgICB2aWRlb0hhc1N0YXJ0ZWQ6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMucmVxdWVzdFZpZGVvQ2FsbCA9IHRoaXMucmVxdWVzdFZpZGVvQ2FsbC5iaW5kKHRoaXMpXG4gIH1cbiAgcmV0dXJuU3VibWl0KGUpIHtcbiAgICBpZiAoZS5jaGFyQ29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgJCgnZm9ybScpLnN1Ym1pdCgpXG4gICAgfVxuICB9XG4gIHJlbmRlckVubGFyZ2VCdXR0b24oKSB7XG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLmlkID0gJ2VubGFyZ2UnXG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9ICdlbmxhcmdlLnN2ZydcbiAgICBpbWcud2lkdGggPSAnMjUnXG4gICAgaW1nLmhlaWdodCA9ICcyNSdcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidXR0b24pXG4gIH1cbiAgcmVuZGVyRW5kQnV0dG9uKCkge1xuICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5pZCA9ICdlbmQtY2FsbCdcbiAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuc3JjID0gJ2VuZF9jYWxsLnN2ZydcbiAgICBpbWcud2lkdGggPSAnMTkwJ1xuICAgIGltZy5oZWlnaHQgPSAnMzgnXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGltZylcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICB9XG4gIHJlcXVlc3RWaWRlb0NhbGwoZSkge1xuICAgIGlmICh3aW5kb3cub2ZmZXJlcikge1xuICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cub2ZmZXJlcikpIHBlZXIuc2VuZFBhcnRpY2lwYXRpb25SZXF1ZXN0KHdpbmRvdy5vZmZlcmVyKVxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwJykuc3R5bGUub3BhY2l0eSA9ICcwLjQnXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLCAwLCAwLCAwLjIpJ1xuICAgIHZhciB0ZXh0ID0gJCgnI20nKS52YWwoKVxuICAgIHRleHQgPSB0ZXh0ICsgJ+KNhCcgKyBwZWVyLnVzZXJpZFxuICAgICQoJyNtJykudmFsKHRleHQpXG4gICAgJCgnZm9ybScpLnN1Ym1pdCgpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlc30+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1cIiBvbktleVByZXNzPXt0aGlzLnJldHVyblN1Ym1pdH0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bnNcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj48aW1nIHNyYz1cImNoYXQuc3ZnXCIgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMjJweFwiIC8+PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlcXVlc3RWaWRlb0NhbGx9PjxpbWcgc3JjPVwidmlkZW8uc3ZnXCIgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMjJweFwiIC8+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDaGF0SW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9XCJ3aW5kb3dcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZXN9PlxuICAgICAgICA8cD5QbGVhc2UgZW50ZXIgdGhlIG5hbWUgb2YgdGhlIHBlcnNvbiB5b3Ugd291bGQgbGlrZSB0byBzcGVhayB0bzo8L3A+XG4gICAgICAgIDxpbnB1dCBpZD1cImlucHV0MVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPHA+QW5kIHlvdXIgbmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCBpZD1cImlucHV0MlwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmZvcm1TdWJtaXR9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGF0U3R5bGVzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIGZvcm1TdHlsZXM6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgfSxcbiAgICAgIHVzZXIxOiAnJyxcbiAgICAgIHVzZXIyOiAnJ1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUZvcm1TdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1TdWJtaXQuYmluZCh0aGlzKVxuICB9XG4gIGhhbmRsZUZvcm1TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHZhciB0ZXh0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dDEnKS52YWx1ZVxuICAgIHZhciB0ZXh0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dDInKS52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXIxOiB0ZXh0Mn0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjI6IHRleHQxfSlcbiAgICB0aGlzLnNldFN0YXRlKHtmb3JtU3R5bGVzOiB7ZGlzcGxheTogJ25vbmUnfX0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hhdFN0eWxlczoge2Rpc3BsYXk6ICdmbGV4J319KVxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVsLnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9ICcwJ1xuICAgIGVsLmlkID0gJ3VzZXJzJ1xuICAgIGVsLmlubmVySFRNTCA9IHRleHQyICsgJyA+ICcgKyB0ZXh0MVxuICAgIHZhciBlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdmFyIGVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBlbDEuaW5uZXJIVE1MID0gdGV4dDIuc2xpY2UoMCwgMSlcbiAgICBlbDIuaW5uZXJIVE1MID0gdGV4dDEuc2xpY2UoMCwgMSlcbiAgICB2YXIgYXZhdGFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYXZhdGFycy5jbGFzc05hbWUgPSAnYXZhdGFycydcbiAgICBhdmF0YXJzLmFwcGVuZENoaWxkKGVsMSlcbiAgICBhdmF0YXJzLmFwcGVuZENoaWxkKGVsMilcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwJykuYXBwZW5kQ2hpbGQoZWwpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cCcpLmFwcGVuZENoaWxkKGF2YXRhcnMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9XCJwb3AtdXBcIj5cbiAgICAgICAgPHNwYW4+Q2hhdDwvc3Bhbj5cbiAgICAgICAgPGg1PmFzayBzb21ldGhpbmcgb3IgbWVudGlvbiBhbnl0aGluZyB0byB5b3VyIHBvaW50IG9mIGNvbnRhY3Q8L2g1PlxuICAgICAgICA8Q2hhdEluZm8gc3R5bGVzPXt0aGlzLnN0YXRlLmZvcm1TdHlsZXN9IGZvcm1TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybVN1Ym1pdH0gLz5cbiAgICAgICAgPHVsIGlkPVwibWVzc2FnZXNcIj5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPENoYXQgdXNlcnM9e1t0aGlzLnN0YXRlLnVzZXIxLCB0aGlzLnN0YXRlLnVzZXIyXX1zdHlsZXM9e3RoaXMuc3RhdGUuY2hhdFN0eWxlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIl19