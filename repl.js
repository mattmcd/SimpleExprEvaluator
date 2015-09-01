function make_repl(node, make_evaluator) {
  var cmd_prompt = '>>';
  var entry_start = 0;
  var my_evaluator;

  if (typeof make_evaluator === 'undefined') {
    my_evaluator = {
      evaluate_input : function(str) { return str + '\n';}, 
      usage : function() {
        return '| Echo evaluator |'; }
    };
  } else {
    my_evaluator = make_evaluator();
  }

  function print_intro() {
    node.value += my_evaluator.usage().trim() + '\n';
  }

  function print_prompt() {
    // Display command prompt
    node.value += cmd_prompt;
    entry_start = node.value.length;
  }

  function print_result(str) {
    if (str !== '') {
      node.value += str.trim() + '\n';
    }
  }

  function remove_char(startInd, endInd) {
    node.value = node.value.slice(0, startInd) + 
      node.value.slice(endInd); 
  }

  function move_selection(ind) {
    node.selectionStart = ind;
    node.selectionEnd = ind;
  }

  function read_char(evt) {
    var cmd = node.value;
    var startInd = node.selectionStart - 1;
    var endInd = node.selectionEnd;
    var c = cmd.slice(startInd, endInd);
    // console.log('Read a character: ' + c);
    if (startInd < entry_start) {
      remove_char(startInd, endInd);
      move_selection(node.value.length);
    } else {
      handle_char(c);
    }
  }

  function handle_char(c) {
    var startInd = node.selectionStart - 1;
    var endInd = node.selectionEnd;
    if (c === '\n') {
      var in_str = node.value.slice(entry_start, endInd);
      var result = my_evaluator.evaluate_input(in_str);
      print_result(result);
      print_prompt();
    }
  }

  node.oninput = read_char;
  node.value = '';
  print_intro();
  print_prompt();
  return {readChar: read_char};
}


function init() {
  console.log('Loaded');
  var cmdline = document.getElementById('cmdline');
  var repl;
  if (typeof make_evaluator === 'undefined') {
    repl = make_repl(cmdline);
  } else {
    repl = make_repl(cmdline, make_evaluator);
  }
}

