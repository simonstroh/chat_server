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
            { id: 'video-button', onClick: this.requestVideoCall },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkNoYXQiLCJwcm9wcyIsInN0YXRlIiwidmlkZW9IYXNTdGFydGVkIiwicmVxdWVzdFZpZGVvQ2FsbCIsImJpbmQiLCJlIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIiQiLCJzdWJtaXQiLCJidXR0b24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImltZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJvbmNsaWNrIiwiYm9keSIsIndpbmRvdyIsIm9mZmVyZXIiLCJnZXRFbGVtZW50QnlJZCIsInBlZXIiLCJzZW5kUGFydGljaXBhdGlvblJlcXVlc3QiLCJzdHlsZSIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0IiwidmFsIiwidXNlcmlkIiwic3R5bGVzIiwicmV0dXJuU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJDaGF0SW5mbyIsImZvcm1TdWJtaXQiLCJBcHAiLCJjaGF0U3R5bGVzIiwiZGlzcGxheSIsImZvcm1TdHlsZXMiLCJ1c2VyMSIsInVzZXIyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInRleHQxIiwidmFsdWUiLCJ0ZXh0MiIsInNldFN0YXRlIiwiZWwiLCJjb2xvciIsImlubmVySFRNTCIsImVsMSIsImVsMiIsInNsaWNlIiwiYXZhdGFycyIsImNsYXNzTmFtZSIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBWTtBQUNWQyx1QkFBaUI7QUFEUCxLQUFaO0FBR0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBTGlCO0FBTWxCOzs7O2lDQUNZQyxDLEVBQUc7QUFDZCxVQUFJQSxFQUFFQyxRQUFGLEtBQWUsRUFB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Q0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5Qi9DLFNBQVNZLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9e1xuICAgICAgdmlkZW9IYXNTdGFydGVkOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnJlcXVlc3RWaWRlb0NhbGwgPSB0aGlzLnJlcXVlc3RWaWRlb0NhbGwuYmluZCh0aGlzKVxuICB9XG4gIHJldHVyblN1Ym1pdChlKSB7XG4gICAgaWYgKGUuY2hhckNvZGUgPT09IDEzKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICQoJ2Zvcm0nKS5zdWJtaXQoKVxuICAgIH1cbiAgfVxuICByZW5kZXJFbmxhcmdlQnV0dG9uKCkge1xuICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi5pZCA9ICdlbmxhcmdlJ1xuICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSAnZW5sYXJnZS5zdmcnXG4gICAgaW1nLndpZHRoID0gJzI1J1xuICAgIGltZy5oZWlnaHQgPSAnMjUnXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGltZylcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICB9XG4gIHJlbmRlckVuZEJ1dHRvbigpIHtcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24uaWQgPSAnZW5kLWNhbGwnXG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9ICdlbmRfY2FsbC5zdmcnXG4gICAgaW1nLndpZHRoID0gJzE5MCdcbiAgICBpbWcuaGVpZ2h0ID0gJzM4J1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWcpXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgfVxuICByZXF1ZXN0VmlkZW9DYWxsKGUpIHtcbiAgICBpZiAod2luZG93Lm9mZmVyZXIpIHtcbiAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2luZG93Lm9mZmVyZXIpKSBwZWVyLnNlbmRQYXJ0aWNpcGF0aW9uUmVxdWVzdCh3aW5kb3cub2ZmZXJlcilcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cCcpLnN0eWxlLm9wYWNpdHkgPSAnMC40J1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC4yKSdcbiAgICB2YXIgdGV4dCA9ICQoJyNtJykudmFsKClcbiAgICB0ZXh0ID0gdGV4dCArICfijYQnICsgcGVlci51c2VyaWRcbiAgICAkKCcjbScpLnZhbCh0ZXh0KVxuICAgICQoJ2Zvcm0nKS5zdWJtaXQoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZXN9PlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtXCIgb25LZXlQcmVzcz17dGhpcy5yZXR1cm5TdWJtaXR9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5zXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+PGltZyBzcmM9XCJjaGF0LnN2Z1wiIHdpZHRoPVwiMjJweFwiIGhlaWdodD1cIjIycHhcIiAvPjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ2aWRlby1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnJlcXVlc3RWaWRlb0NhbGx9PjxpbWcgc3JjPVwidmlkZW8uc3ZnXCIgd2lkdGg9XCIyMnB4XCIgaGVpZ2h0PVwiMjJweFwiIC8+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDaGF0SW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9XCJ3aW5kb3dcIiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZXN9PlxuICAgICAgICA8cD5QbGVhc2UgZW50ZXIgdGhlIG5hbWUgb2YgdGhlIHBlcnNvbiB5b3Ugd291bGQgbGlrZSB0byBzcGVhayB0bzo8L3A+XG4gICAgICAgIDxpbnB1dCBpZD1cImlucHV0MVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPHA+QW5kIHlvdXIgbmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCBpZD1cImlucHV0MlwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmZvcm1TdWJtaXR9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGF0U3R5bGVzOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIGZvcm1TdHlsZXM6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgfSxcbiAgICAgIHVzZXIxOiAnJyxcbiAgICAgIHVzZXIyOiAnJ1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUZvcm1TdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1TdWJtaXQuYmluZCh0aGlzKVxuICB9XG4gIGhhbmRsZUZvcm1TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHZhciB0ZXh0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dDEnKS52YWx1ZVxuICAgIHZhciB0ZXh0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dDInKS52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXIxOiB0ZXh0Mn0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjI6IHRleHQxfSlcbiAgICB0aGlzLnNldFN0YXRlKHtmb3JtU3R5bGVzOiB7ZGlzcGxheTogJ25vbmUnfX0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hhdFN0eWxlczoge2Rpc3BsYXk6ICdmbGV4J319KVxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGVsLnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9ICcwJ1xuICAgIGVsLmlkID0gJ3VzZXJzJ1xuICAgIGVsLmlubmVySFRNTCA9IHRleHQyICsgJyA+ICcgKyB0ZXh0MVxuICAgIHZhciBlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdmFyIGVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBlbDEuaW5uZXJIVE1MID0gdGV4dDIuc2xpY2UoMCwgMSlcbiAgICBlbDIuaW5uZXJIVE1MID0gdGV4dDEuc2xpY2UoMCwgMSlcbiAgICB2YXIgYXZhdGFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYXZhdGFycy5jbGFzc05hbWUgPSAnYXZhdGFycydcbiAgICBhdmF0YXJzLmFwcGVuZENoaWxkKGVsMSlcbiAgICBhdmF0YXJzLmFwcGVuZENoaWxkKGVsMilcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwJykuYXBwZW5kQ2hpbGQoZWwpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cCcpLmFwcGVuZENoaWxkKGF2YXRhcnMpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9XCJwb3AtdXBcIj5cbiAgICAgICAgPHNwYW4+Q2hhdDwvc3Bhbj5cbiAgICAgICAgPGg1PmFzayBzb21ldGhpbmcgb3IgbWVudGlvbiBhbnl0aGluZyB0byB5b3VyIHBvaW50IG9mIGNvbnRhY3Q8L2g1PlxuICAgICAgICA8Q2hhdEluZm8gc3R5bGVzPXt0aGlzLnN0YXRlLmZvcm1TdHlsZXN9IGZvcm1TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybVN1Ym1pdH0gLz5cbiAgICAgICAgPHVsIGlkPVwibWVzc2FnZXNcIj5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPENoYXQgdXNlcnM9e1t0aGlzLnN0YXRlLnVzZXIxLCB0aGlzLnN0YXRlLnVzZXIyXX1zdHlsZXM9e3RoaXMuc3RhdGUuY2hhdFN0eWxlc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIl19