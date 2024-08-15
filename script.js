        document.querySelectorAll('.seat').forEach(seat => {
            seat.addEventListener('click', function() {
                this.classList.toggle('selected');
                updateSeatCount();
            });
        });

        document.getElementById('bookNowButton').addEventListener('click', function() {
            const selectedSeats = document.querySelectorAll('.seat.selected');
            const seatDetails = Array.from(selectedSeats).map(seat => seat.textContent);
            localStorage.setItem('selectedSeats', JSON.stringify(seatDetails));
        });

        function updateSeatCount() {
            const selectedSeats = document.querySelectorAll('.seat.selected').length;
            document.getElementById('selectedSeats').textContent = selectedSeats;
            document.getElementById('totalSeats').textContent = selectedSeats;
        }
