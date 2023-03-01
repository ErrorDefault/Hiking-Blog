import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author, location, streetAddress, googleMapsLink }) {
  let formattedLat = location.lat.toFixed(3)
  let formattedLon = location.lon.toFixed(3)
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-base md:text-lg lg:text-xl font-bold mb-12 hover:underline text-center md:text-left">
        <a href={googleMapsLink} target="_blank">{`${streetAddress} (${formattedLat}, ${formattedLon})`}</a>
      </div>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  )
}
