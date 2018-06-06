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
    key: 'requestVideoCall',
    value: function requestVideoCall() {
      if (window.offerer) peer.sendParticipationRequest(window.offerer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkNoYXQiLCJwcm9wcyIsInN0YXRlIiwidmlkZW9IYXNTdGFydGVkIiwicmVxdWVzdFZpZGVvQ2FsbCIsImJpbmQiLCJlIiwiY2hhckNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIiQiLCJzdWJtaXQiLCJ3aW5kb3ciLCJvZmZlcmVyIiwicGVlciIsInNlbmRQYXJ0aWNpcGF0aW9uUmVxdWVzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJib2R5IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dCIsInZhbCIsInVzZXJpZCIsInN0eWxlcyIsInJldHVyblN1Ym1pdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2hhdEluZm8iLCJmb3JtU3VibWl0IiwiQXBwIiwiY2hhdFN0eWxlcyIsImRpc3BsYXkiLCJmb3JtU3R5bGVzIiwidXNlcjEiLCJ1c2VyMiIsImhhbmRsZUZvcm1TdWJtaXQiLCJ0ZXh0MSIsInZhbHVlIiwidGV4dDIiLCJzZXRTdGF0ZSIsImVsIiwiY3JlYXRlRWxlbWVudCIsImNvbG9yIiwiaGVpZ2h0IiwiaWQiLCJpbm5lckhUTUwiLCJlbDEiLCJlbDIiLCJzbGljZSIsImF2YXRhcnMiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBWTtBQUNWQyx1QkFBaUI7QUFEUCxLQUFaO0FBR0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBTGlCO0FBTWxCOzs7O2lDQUNZQyxDLEVBQUc7QUFDZCxVQUFJQSxFQUFFQyxRQUFGLEtBQWUsRUFBbkIsRUFBdUI7QUFDckJELFVBQUVFLGNBQUY7QUFDQUMsVUFBRSxN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QyxLQUFMLENBQVdpQyxLQUE5QixDQUFiLEVBQWtELFFBQVEsS0FBS2pDLEtBQUwsQ0FBVzZCLFVBQXJFO0FBTkYsT0FERjtBQVVEOzs7O0VBbERlTCxNQUFNQyxTOztBQXFEeEIwQixTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJ2QyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgIHZpZGVvSGFzU3RhcnRlZDogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0VmlkZW9DYWxsID0gdGhpcy5yZXF1ZXN0VmlkZW9DYWxsLmJpbmQodGhpcylcbiAgfVxuICByZXR1cm5TdWJtaXQoZSkge1xuICAgIGlmIChlLmNoYXJDb2RlID09PSAxMykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAkKCdmb3JtJykuc3VibWl0KClcbiAgICB9XG4gIH1cbiAgcmVxdWVzdFZpZGVvQ2FsbCgpIHtcbiAgICBpZiAod2luZG93Lm9mZmVyZXIpIHBlZXIuc2VuZFBhcnRpY2lwYXRpb25SZXF1ZXN0KHdpbmRvdy5vZmZlcmVyKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAnKS5zdHlsZS5vcGFjaXR5ID0gJzAuNCdcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknXG4gICAgdmFyIHRleHQgPSAkKCcjbScpLnZhbCgpXG4gICAgdGV4dCA9IHRleHQgKyAn4o2EJyArIHBlZXIudXNlcmlkXG4gICAgJCgnI20nKS52YWwodGV4dClcbiAgICAkKCdmb3JtJykuc3VibWl0KClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGVzfT5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwibVwiIG9uS2V5UHJlc3M9e3RoaXMucmV0dXJuU3VibWl0fS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuc1wiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPjxpbWcgc3JjPVwiY2hhdC5zdmdcIiB3aWR0aD1cIjIycHhcIiBoZWlnaHQ9XCIyMnB4XCIgLz48L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVxdWVzdFZpZGVvQ2FsbH0+PGltZyBzcmM9XCJ2aWRlby5zdmdcIiB3aWR0aD1cIjIycHhcIiBoZWlnaHQ9XCIyMnB4XCIgLz48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIENoYXRJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBpZD1cIndpbmRvd1wiIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlc30+XG4gICAgICAgIDxwPlBsZWFzZSBlbnRlciB0aGUgbmFtZSBvZiB0aGUgcGVyc29uIHlvdSB3b3VsZCBsaWtlIHRvIHNwZWFrIHRvOjwvcD5cbiAgICAgICAgPGlucHV0IGlkPVwiaW5wdXQxXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICA8cD5BbmQgeW91ciBuYW1lOjwvcD5cbiAgICAgICAgPGlucHV0IGlkPVwiaW5wdXQyXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZm9ybVN1Ym1pdH0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoYXRTdHlsZXM6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgZm9ybVN0eWxlczoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICB9LFxuICAgICAgdXNlcjE6ICcnLFxuICAgICAgdXNlcjI6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCA9IHRoaXMuaGFuZGxlRm9ybVN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cbiAgaGFuZGxlRm9ybVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRleHQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0MScpLnZhbHVlXG4gICAgdmFyIHRleHQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0MicpLnZhbHVlXG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcjE6IHRleHQyfSlcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VyMjogdGV4dDF9KVxuICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1TdHlsZXM6IHtkaXNwbGF5OiAnbm9uZSd9fSlcbiAgICB0aGlzLnNldFN0YXRlKHtjaGF0U3R5bGVzOiB7ZGlzcGxheTogJ2ZsZXgnfX0pXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZWwuc3R5bGUuY29sb3IgPSAndHJhbnNwYXJlbnQnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gJzAnXG4gICAgZWwuaWQgPSAndXNlcnMnXG4gICAgZWwuaW5uZXJIVE1MID0gdGV4dDIgKyAnID4gJyArIHRleHQxXG4gICAgdmFyIGVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB2YXIgZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGVsMS5pbm5lckhUTUwgPSB0ZXh0Mi5zbGljZSgwLCAxKVxuICAgIGVsMi5pbm5lckhUTUwgPSB0ZXh0MS5zbGljZSgwLCAxKVxuICAgIHZhciBhdmF0YXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhdmF0YXJzLmNsYXNzTmFtZSA9ICdhdmF0YXJzJ1xuICAgIGF2YXRhcnMuYXBwZW5kQ2hpbGQoZWwxKVxuICAgIGF2YXRhcnMuYXBwZW5kQ2hpbGQoZWwyKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAnKS5hcHBlbmRDaGlsZChlbClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwJykuYXBwZW5kQ2hpbGQoYXZhdGFycylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBpZD1cInBvcC11cFwiPlxuICAgICAgICA8c3Bhbj5DaGF0PC9zcGFuPlxuICAgICAgICA8aDU+YXNrIHNvbWV0aGluZyBvciBtZW50aW9uIGFueXRoaW5nIHRvIHlvdXIgcG9pbnQgb2YgY29udGFjdDwvaDU+XG4gICAgICAgIDxDaGF0SW5mbyBzdHlsZXM9e3RoaXMuc3RhdGUuZm9ybVN0eWxlc30gZm9ybVN1Ym1pdD17dGhpcy5oYW5kbGVGb3JtU3VibWl0fSAvPlxuICAgICAgICA8dWwgaWQ9XCJtZXNzYWdlc1wiPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8Q2hhdCB1c2Vycz17W3RoaXMuc3RhdGUudXNlcjEsIHRoaXMuc3RhdGUudXNlcjJdfXN0eWxlcz17dGhpcy5zdGF0ZS5jaGF0U3R5bGVzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG4iXX0=