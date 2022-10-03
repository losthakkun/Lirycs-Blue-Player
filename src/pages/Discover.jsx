import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {

	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center sm:flex-grow flex-col mt-4 mb-10">
				<h2 className="text-3xl font-bold text-white text-left">
					Discover
				</h2>
				<select
					value=""
					className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 top-5"
					onChange={(e) => console.log(e.target.value)}
				>
					{genres.map((genre) => (
						<option key={genre.value} value={genre.value}>
							{genre.title}
						</option>
					))}
				</select>
			</div>
			<div className="flex flex-wrap sm:justify-start justify-center gap-8">
				{[1,2,3,4,5,6,7,8,9,10].map((song, i) => (
					<SongCard
						key={song.key}
						song={song}
						i={i}
					/>
				))}
			</div>
		</div>
	);
};

export default Discover;
