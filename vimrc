fu! ParseNLP(sentence)
  let sentence=tolower(string(a:sentence))
  let output=system('node vim-cmd.js "' . sentence . '"')
  let lines=split(output, '\n')
  if len(lines) > 1
    execute 'echo "' . output . '"'
  endif
  let command=split(output, '\n')[-1]
  execute command
endfunction

command -nargs=1 Shout call ParseNLP(<q-args>)

