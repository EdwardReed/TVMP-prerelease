# Modal is activated 30 seconds in to page viewing
delay = (ms, func) ->
  setTimeout(func, ms)

# Open modal at 20 seconds
# If modal is not currently visible
delay( 25000, ->
  if $('#main-modal').css('display') == 'none'
    $('#main-modal').openModal()
  else
)
