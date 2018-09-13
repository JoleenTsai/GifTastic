        // Example Gif
        sampleGif = ['Booya', 'You Got It Dude', 'Wassup', 'As If!', 'Whatever']
        sampleGif.forEach(gif => {
            $('#buttonArea').append(`
            <button class="gifBtn" data-gif="${gif}"> ${gif}</button>
            `)

        })
        $('#submitPhrase').on('click', function () {
            event.preventDefault()
            if ($('#inputPhrase').val().trim() !== '') {
                $('#buttonArea').append(`
                <button class="gifBtn" data-gif="${$('#inputPhrase').val()}">${$('#inputPhrase').val()}</button>
                `)
            }
            $('#inputPhrase').val()
        })

        // Pull the Gif Images and Display them
        $(document).on('click', '.gifBtn', function () {
            $('#gifArea').empty()

            let url = "https://api.giphy.com/v1/gifs/search"
            url += '?' + $.param({
                'api_key': "DXBl0MxwJ0MvvRZbG98KYuvnvWrXsDv4",
                'q': `${$(this).attr('data-gif')}`,
                'limit': 10
            });

            $.get(url)
                .then(function (r) {
                    r.data.forEach(gif => {
                        $('#gifArea').append(`
                        <div class="col-md-3 col-lg-3" >
                         <img class="gif-image" id="gifChange" src="${gif.images.original_still.url}" alt="${gif.title}"
                         onclick="$('.gif-image').attr('src', "${gif.images.original.url}")
                         >
                         <h4 class="gif-rating">Rated: ${gif.rating}</h4>
                         </div>
                         `)
                        });
                    })
                    .catch(function (e) { console.log(e) })
                    
                })

                //Clear Gify Area
                $('#clearGifBtn').on('click', function () {
                    event.preventDefault()
                    $('#gifArea').empty()
                })
                
                // $('#gifChange').on('click', function () {
                //     event.preventDefault()
                //     console.log('hello')
                // })
                // gifChange = $('.gif-image').attr('src', "${gif.images.original.url}")
                