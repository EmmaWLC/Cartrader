<template>
  <!-- NAV -->
  <nav
    class="grid grid-cols-8 justify-between w-full border border-neutral-900"
  >
    <div
      class="hidden md:block px-6 py-8 border-r border-neutral-900 self-center text-base font-medium leading-tight tracking-tight text-neutral-900 text-center"
    >
      Shop
    </div>
    <div
      class="hidden md:block px-6 py-8 border-r border-neutral-900 self-center text-base font-medium leading-tight tracking-tight text-neutral-900 text-center"
    >
      Contact
    </div>
    <div
      class="hidden md:block px-6 py-8 border-l border-neutral-900 self-center text-base font-medium leading-tight tracking-tight text-neutral-900 text-center col-end-8"
    >
      Sign in
    </div>
    <div
      class="hidden md:block px-6 py-8 border-l border-neutral-900 self-center text-base font-medium leading-tight tracking-tight text-neutral-900 text-center col-end-9"
    >
      Cart
    </div>
    <div
      class="flex justify-center align-center max-w-12 min-w-10 h-12 p-3 border-r border-neutral-900 md:hidden"
    >
      <img src="~@/assets/icons/menu.svg" alt="" />
    </div>
    <div
      class="flex justify-center align-center max-w-12 min-w-10 h-12 p-3 border-l border-neutral-900 md:hidden col-end-9"
    >
      <img src="~@/assets/icons/cart.svg" alt="" />
    </div>
  </nav>
  <!-- NAV -->
  <!-- Main -->
  <div
    class="grid place-items-center border-r border-l border-neutral-900 max-w-full"
  >
    <div
      class="px-4 py-10 grid grid-cols-2 max-w-full border-b border-neutral-900"
    >
      <h1 class="text-neutral-900 font-semibold col-span-2">
        Kyiv<br />
        <div class="flex items-start">
          LuxeBouquets
          <span class="text-neutral-900 text-[20px] md:text-[40px] font-medium"
            >®</span
          >
        </div>
      </h1>
      <p
        class="text-neutral-900 text-opacity-90 pt-4 pb-6 col-span-2 border-b border-neutral-900"
      >
        Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
        Joy with Our Online Flower Delivery Service
      </p>
      <div class="pt-4 border-r border-neutral-900 pr-4">
        <img
          class="h-full object-cover"
          src="~/assets/images/hero.jpg"
          alt=""
        />
      </div>
      <div
        class="text-neutral-900 text-opacity-90 text-sm font-normal leading-[16.80px] pt-4 pl-4 self-end"
      >
        Experience the joy of giving with our modern floral studio. Order online
        and send fresh flowers, plants and gifts today.
      </div>
    </div>
    <div class="grid grid-cols-2 max-w-full relative">
      <div
        class="grid justify-items-center content-center border-neutral-900 border-b"
      >
        <h3 class="text-neutral-900 text-2xl font-medium leading-loose">
          Fresh Flowers
        </h3>
        <div class="flex align-center justify-center absolute bottom-3">
          <div class="text-neutral-900 text-sm font-semibold tracking-tight">
            Shop now
          </div>
          <img src="~/assets/icons/arrow.svg" alt="" />
        </div>
      </div>
      <div class="object-cover">
        <img src="~@/assets/images/item-1.jpg" alt="" />
      </div>
    </div>
    <div class="grid grid-cols-2 max-w-full relative">
      <div
        class="grid justify-items-center content-center border-neutral-900 border-b row-start-1 col-start-2"
      >
        <h3 class="text-neutral-900 text-2xl font-medium leading-loose">
          Dried Flowers
        </h3>
        <div class="flex align-center justify-center absolute bottom-3">
          <div class="text-neutral-900 text-sm font-semibold tracking-tight">
            Shop now
          </div>
          <img src="~/assets/icons/arrow.svg" alt="" />
        </div>
      </div>
      <div class="object-cover">
        <img src="~@/assets/images/item-1.jpg" alt="" />
      </div>
    </div>
    
  </div>
  <div
    class="grid place-items-center border-r border-l border-neutral-900 max-w-full"
  >
  <div class="grid grid-cols-2 max-w-full relative">
      <div
        class="grid justify-items-center content-center border-neutral-900 border-b"
      >
        <h3 class="text-neutral-900 text-2xl font-medium leading-loose">
          Dried Flowers
        </h3>
        <div class="flex align-center justify-center absolute bottom-3">
          <div class="text-neutral-900 text-sm font-semibold tracking-tight">
            Shop now
          </div>
          <img src="~/assets/icons/arrow.svg" alt="" />
        </div>
      </div>
      <div class="object-cover">
        <img src="~@/assets/images/item-1.jpg" alt="" />
      </div>
    </div>
    <div class="grid grid-cols-2 max-w-full relative">
      <div
        class="grid justify-items-center content-center border-neutral-900 border-b"
      >
        <h3 class="text-neutral-900 text-2xl font-medium leading-loose">
          Fresh Flowers
        </h3>
        <div class="flex align-center justify-center absolute bottom-3">
          <div class="text-neutral-900 text-sm font-semibold tracking-tight">
            Shop now
          </div>
          <img src="~/assets/icons/arrow.svg" alt="" />
        </div>
      </div>
      <div class="object-cover">
        <img src="~@/assets/images/item-1.jpg" alt="" />
      </div>
    </div>
    
  </div>
  <!-- Main -->
  <!-- AboutUs -->
  <!-- <div class="inline-flex items-start justify-start">
    <div
      class="w-[720px] p-20 border-t border-neutral-900 flex-col justify-center items-start gap-4 inline-flex"
    >
      <div
        class="w-[576px] text-neutral-900 text-[50px] font-semibold leading-[60px]"
      >
        About us
      </div>
    </div>
    <div
      class="w-[720px] p-20 border-l border-b border-neutral-900 flex-col justify-start items-start gap-16 inline-flex"
    >
      <div class="flex flex-col items-start justify-start gap-6">
        <div
          class="text-neutral-900 text-sm font-medium uppercase leading-[16.80px]"
        >
          our story
        </div>
        <div class="flex flex-col items-start justify-start gap-4">
          <div
            class="w-[543.50px] text-neutral-900 text-[38px] font-medium leading-[45.60px]"
          >
            Kyiv LuxeBouquets
          </div>
          <div
            class="w-[543.50px] text-neutral-900 text-opacity-90 text-base font-normal leading-snug"
          >
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone's day amazing
            by sending flowers, plants and gifts the same or next day. Ordering
            flowers online has never been easier.
          </div>
        </div>
      </div>
      <div
        class="w-[175px] h-14 px-6 pt-4 pb-3.5 border border-neutral-900 justify-center items-center gap-2 inline-flex"
      >
        <div
          class="text-base font-medium leading-tight tracking-wide uppercase text-neutral-900"
        >
          Lern more
        </div>
      </div>
    </div>
  </div> -->
  <!-- AboutUs -->
  <!-- <div class="inline-flex items-start justify-start">
    <div
      class="w-[720px] p-20 border-t border-neutral-900 flex-col justify-center items-start gap-4 inline-flex"
    >
      <div class="text-neutral-900 text-[50px] font-semibold leading-[60px]">
        Why choose us ?
      </div>
    </div>
    <div class="inline-flex flex-col items-start justify-start">
      <div
        class="h-[332px] p-20 border-l border-b border-neutral-900 flex-col justify-start items-start gap-4 flex"
      >
        <div
          class="self-stretch text-neutral-900 text-[38px] font-medium leading-[45.60px]"
        >
          Stylish bouquets by florists
        </div>
        <div
          class="self-stretch text-base font-normal leading-snug text-neutral-900 text-opacity-90"
        >
          At our floral studio, our professional florists craft the most elegant
          and stylish bouquets using only the freshest and highest quality
          materials available. We stay up-to-date with the latest floral design
          trends and offer unique arrangements that are sure to impress. Let us
          brighten up your day with our stunning bouquets and same-day delivery
          service.
        </div>
      </div>
      <div
        class="flex flex-col items-start justify-start gap-4 p-20 border-b border-l h-72 border-neutral-900"
      >
        <div
          class="self-stretch text-neutral-900 text-[38px] font-medium leading-[45.60px]"
        >
          On-time delivery
        </div>
        <div
          class="self-stretch text-base font-normal leading-snug text-neutral-900 text-opacity-90"
        >
          Never miss a moment with our on-time flower delivery service. Our
          couriers will deliver your bouquet personally, without boxes, to
          ensure it arrives in perfect condition. Trust us to deliver your
          thoughtful gift reliably.
        </div>
      </div>
      <div
        class="flex flex-col items-start justify-start gap-4 p-20 border-b border-l h-72 border-neutral-900"
      >
        <div
          class="self-stretch text-neutral-900 text-[38px] font-medium leading-[45.60px]"
        >
          Safe payment
        </div>
        <div
          class="self-stretch text-base font-normal leading-snug text-neutral-900 text-opacity-90"
        >
          You can feel secure when placing an order with us, as we use
          industry-standard security measures to protect your payment
          information. Your transaction will be safe and hassle-free, so you can
          shop with confidence.
        </div>
      </div>
      <div
        class="h-[332px] p-20 border-l border-b border-neutral-900 flex-col justify-start items-start gap-4 flex"
      >
        <div
          class="self-stretch text-neutral-900 text-[38px] font-medium leading-[45.60px]"
        >
          Subscription by your needs
        </div>
        <div
          class="self-stretch text-base font-normal leading-snug text-neutral-900 text-opacity-90"
        >
          With our subscription service tailored to your specific needs, you can
          enjoy the convenience of having beautiful bouquets delivered straight
          to your door at regular intervals. Our flexible service is perfect for
          busy individuals or those who want to ensure they always have fresh
          flowers on hand. You'll save time and money with this hassle-free
          solution to your floral needs.
        </div>
      </div>
    </div>
  </div>
  <div class="inline-flex items-start justify-start">
    <div class="inline-flex flex-col items-center justify-start">
      <div
        class="w-[720px] h-[360px] p-20 border-t border-neutral-900 flex-col justify-start items-start gap-6 flex"
      >
        <div class="text-neutral-900 text-[50px] font-semibold leading-[60px]">
          To Contact Us
        </div>
        <div
          class="self-stretch h-[97px] flex-col justify-start items-start gap-4 flex"
        >
          <div class="text-neutral-900 text-lg font-medium leading-[25.20px]">
            We will call you back
          </div>
          <div class="inline-flex items-start self-stretch justify-start gap-4">
            <div
              class="inline-flex flex-col items-start self-stretch justify-start gap-3 grow shrink basis-0"
            >
              <div
                class="flex flex-col items-start self-stretch justify-start gap-2 h-14"
              >
                <div
                  class="inline-flex items-center self-stretch justify-start p-4 bg-white border h-14 border-zinc-300"
                >
                  <div
                    class="text-zinc-500 text-sm font-medium leading-[16.80px]"
                  >
                    +380 XX XXX XX XX
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grow shrink basis-0 h-14 px-6 pt-4 pb-3.5 bg-neutral-900 justify-center items-center gap-2 flex"
            >
              <div
                class="text-base font-medium leading-tight tracking-wide text-white uppercase"
              >
                book a call
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="inline-flex items-start justify-start border-b border-neutral-900"
      >
        <div
          class="h-[360px] border-l border-r border-b border-neutral-900 flex-col justify-start items-center inline-flex"
        >
          <div
            class="w-[360px] px-2.5 py-4 border-t border-b border-neutral-900 justify-between items-center inline-flex"
          >
            <div
              class="text-neutral-900 text-[38px] font-medium leading-[45.60px]"
            >
              Phone
            </div>
          </div>
          <div
            class="w-[360px] grow shrink basis-0 p-6 flex-col justify-center items-center gap-6 flex"
          >
            <div class="inline-flex items-center justify-center gap-1">
              <div class="relative w-6 h-6"></div>
              <div
                class="text-base font-semibold leading-tight tracking-tight text-neutral-900"
              >
                +380980099777
              </div>
            </div>
            <div class="inline-flex items-center justify-center gap-1">
              <div class="relative w-6 h-6"></div>
              <div
                class="text-base font-semibold leading-tight tracking-tight text-neutral-900"
              >
                +380980099111
              </div>
            </div>
          </div>
        </div>
        <div class="h-[360px] flex-col justify-start items-center inline-flex">
          <div
            class="w-[360px] px-2.5 py-4 border-t border-b border-neutral-900 justify-between items-center inline-flex"
          >
            <div
              class="text-neutral-900 text-[38px] font-medium leading-[45.60px]"
            >
              Address
            </div>
          </div>
          <div
            class="w-[360px] grow shrink basis-0 p-6 flex-col justify-center items-center flex"
          >
            <div
              class="w-[263px] flex-col justify-end items-center gap-[22px] flex"
            >
              <div
                class="text-neutral-900 text-sm font-medium uppercase leading-[16.80px]"
              >
                opening hours: 8 to 11 p.m.
              </div>
              <div class="inline-flex items-end justify-center gap-1">
                <div class="relative w-6 h-6"></div>
                <div
                  class="text-base font-semibold leading-tight tracking-tight text-neutral-900"
                >
                  15/4 Khreshchatyk Street, Kyiv
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[720px] h-[720px] bg-neutral-900 bg-opacity-20 border-l border-b border-neutral-900 justify-center items-end flex"
    >
      <div class="flex items-start justify-start">
        <div
          class="h-[78px] px-10 py-4 bg-white border-l border-t border-b border-neutral-900 justify-between items-center flex"
        >
          <div
            class="text-neutral-900 text-[38px] font-medium leading-[45.60px]"
          >
            Follow us
          </div>
        </div>
        <div
          class="w-[360px] h-[78px] px-10 py-4 bg-white border-l border-t border-b border-neutral-900 justify-between items-center flex"
        >
          <div class="flex items-start justify-start gap-8">
            <div class="relative w-6 h-6"></div>
            <div class="relative w-6 h-6"></div>
            <div class="relative w-6 h-6"></div>
            <div class="relative w-6 h-6"></div>
            <div class="relative w-6 h-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="h-[220px] px-2.5 py-20 border-l border-r border-b border-neutral-900 flex-col justify-center items-center flex"
  >
    <div class="text-neutral-900 text-[50px] font-semibold leading-[60px]">
      Our Service
    </div>
  </div>
  <div class="inline-flex items-start justify-start">
    <div
      class="w-[720px] h-[720px] bg-neutral-900 bg-opacity-25 border-l border-b border-neutral-900"
    ></div>
    <div
      class="w-[720px] self-stretch p-20 border-l border-b border-neutral-900 flex-col justify-between items-center gap-4 inline-flex"
    >
      <div
        class="self-stretch h-[312px] flex-col justify-start items-center gap-16 flex"
      >
        <div
          class="flex flex-col items-center self-stretch justify-center h-48 gap-6"
        >
          <div
            class="text-center text-neutral-900 text-sm font-medium uppercase leading-[16.80px]"
          >
            service
          </div>
          <div
            class="self-stretch h-[151px] flex-col justify-start items-start gap-4 flex"
          >
            <div
              class="self-stretch text-center text-neutral-900 text-[50px] font-semibold leading-[60px]"
            >
              Flower Subcriptions
            </div>
            <div
              class="self-stretch text-center text-neutral-900 text-opacity-90 text-lg font-medium leading-[25.20px]"
            >
              Experience the convenience and savings of regular flower
              deliveries with our flexible subscription service - up to 30% more
              profitable than one-time purchases.
            </div>
          </div>
        </div>
        <div
          class="h-14 px-6 pt-4 pb-3.5 border border-neutral-900 justify-center items-center gap-2 inline-flex"
        >
          <div
            class="text-base font-medium leading-tight tracking-wide uppercase text-neutral-900"
          >
            Subscribe Now
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-full h-[720px] bg-neutral-900 bg-opacity-40 flex-col justify-center items-center flex"
  >
    <div
      class="flex flex-col items-center self-stretch justify-center gap-16 p-20 grow shrink basis-0"
    >
      <div class="flex flex-col items-center justify-start gap-6">
        <div class="text-white text-sm font-medium uppercase leading-[16.80px]">
          service
        </div>
        <div class="flex flex-col items-center justify-start gap-4">
          <div class="text-white text-[50px] font-semibold leading-[60px]">
            Wedding & Event Decor
          </div>
          <div
            class="w-[586px] text-center text-white text-lg font-medium leading-[25.20px]"
          >
            Let our team of expert florists and designers create stunning,
            on-trend floral décor for your special day. Trust us to bring your
            vision to life.
          </div>
        </div>
      </div>
      <div
        class="w-[175px] h-14 px-6 pt-4 pb-3.5 border border-white justify-center items-center gap-2 inline-flex"
      >
        <div
          class="text-base font-medium leading-tight tracking-wide text-white uppercase"
        >
          Inquire Now
        </div>
      </div>
    </div>
  </div>
  <div
    class="h-[1009px] bg-white border-t border-neutral-900 flex-col justify-center items-center flex"
  >
    <div class="flex flex-col items-center justify-start gap-16 p-20">
      <div class="flex flex-col items-center justify-start gap-4">
        <div class="flex flex-col items-center justify-start gap-6">
          <div class="flex flex-col items-center justify-start gap-2">
            <div class="w-[77px] h-7 relative"></div>
            <div
              class="text-neutral-900 text-sm font-medium uppercase leading-[16.80px]"
            >
              Reviews
            </div>
          </div>
          <div
            class="text-neutral-900 text-[50px] font-semibold leading-[60px]"
          >
            Our Clients say
          </div>
        </div>
        <div class="h-[147px] flex-col justify-start items-center gap-8 flex">
          <div
            class="inline-flex items-center self-stretch justify-start gap-6"
          >
            <div class="relative w-8 h-8"></div>
            <div
              class="inline-flex flex-col items-center justify-center gap-4 grow shrink basis-0"
            >
              <div class="self-stretch text-center">
                <span
                  style="text-neutral-900 text-[32px] font-normal leading-[38.40px]"
                  >“</span
                ><span
                  style="text-neutral-900 text-[28px] font-normal leading-[33.60px]"
                  >Ordered flowers online and they were the best bouquet!
                  Impressed everyone around. Highly recommend this flower
                  shop!</span
                ><span
                  style="text-neutral-900 text-[32px] font-normal leading-[38.40px]"
                  >”</span
                >
              </div>
              <div
                class="self-stretch text-base font-medium leading-tight text-center text-neutral-900"
              >
                – Ronald Richards
              </div>
            </div>
            <div class="relative w-8 h-8"></div>
          </div>
          <div class="inline-flex items-start justify-start h-1 gap-1 w-7">
            <div class="w-1 h-1 rounded-full bg-zinc-500"></div>
            <div class="w-1 h-1 rounded-full bg-zinc-300"></div>
            <div class="w-1 h-1 rounded-full bg-zinc-300"></div>
            <div class="w-1 h-1 rounded-full bg-zinc-300"></div>
          </div>
        </div>
      </div>
      <div
        class="h-14 px-6 pt-4 pb-3.5 border border-neutral-900 justify-center items-center gap-2 inline-flex"
      >
        <div
          class="text-base font-medium leading-tight tracking-wide uppercase text-neutral-900"
        >
          Read reviews
        </div>
      </div>
    </div>
    <div
      class="inline-flex items-start justify-start w-full border border-neutral-900"
    >
      <div
        class="inline-flex flex-col items-start justify-start gap-6 p-10 bg-white grow shrink basis-0"
      >
        <div
          class="self-stretch text-base font-normal leading-snug text-neutral-900"
        >
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
          sharing your address
        </div>
        <div class="flex flex-col items-start justify-start gap-4">
          <div class="flex flex-col items-start justify-start gap-3">
            <div
              class="flex flex-col items-start self-stretch justify-start gap-2 h-14"
            >
              <div
                class="inline-flex items-center self-stretch justify-start p-4 bg-white border h-14 border-zinc-300"
              >
                <div
                  class="text-zinc-500 text-sm font-medium leading-[16.80px]"
                >
                  Your Email
                </div>
              </div>
            </div>
          </div>
          <div
            class="self-stretch h-14 px-6 pt-4 pb-3.5 bg-neutral-900 justify-center items-center gap-2 inline-flex"
          >
            <div
              class="text-base font-medium leading-tight tracking-wide text-white uppercase"
            >
              Remind
            </div>
          </div>
        </div>
      </div>
      <div
        class="inline-flex flex-col items-start justify-start gap-6 p-10 bg-white border-l grow shrink basis-0 border-neutral-900"
      >
        <div
          class="self-stretch text-zinc-500 text-[21px] font-medium leading-relaxed"
        >
          Contact Us
        </div>
        <div
          class="flex flex-col items-start self-stretch justify-start gap-2 h-11"
        >
          <div
            class="w-[280px] text-zinc-500 text-sm font-normal leading-[16.80px]"
          >
            Address
          </div>
          <div
            class="self-stretch text-base font-medium leading-tight tracking-tight text-neutral-900"
          >
            15/4 Khreshchatyk Street, Kyiv
          </div>
        </div>
        <div
          class="flex flex-col items-start self-stretch justify-start gap-2 h-11"
        >
          <div
            class="w-[280px] text-zinc-500 text-sm font-normal leading-[16.80px]"
          >
            Phone
          </div>
          <div
            class="self-stretch text-base font-medium leading-tight tracking-tight text-neutral-900"
          >
            +380980099777
          </div>
        </div>
        <div class="flex flex-col items-start justify-start gap-2">
          <div
            class="w-[280px] text-zinc-500 text-sm font-normal leading-[16.80px]"
          >
            General Enquiry:
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Kiev.Florist.Studio@gmail.com
          </div>
        </div>
        <div class="flex flex-col items-start justify-start gap-6">
          <div
            class="w-[280px] text-zinc-500 text-[21px] font-medium leading-relaxed"
          >
            Follow Us
          </div>
          <div class="inline-flex items-start justify-start gap-8">
            <div class="relative w-6 h-6"></div>
            <div class="relative w-6 h-6"></div>
            <div class="relative w-6 h-6"></div>
            <div class="relative w-6 h-6"></div>
            <div class="relative w-6 h-6"></div>
          </div>
        </div>
      </div>
      <div
        class="inline-flex flex-col items-start justify-start gap-6 p-10 bg-white border-l grow shrink basis-0 border-neutral-900"
      >
        <div
          class="self-stretch text-zinc-500 text-[21px] font-medium leading-relaxed"
        >
          Shop
        </div>
        <div class="flex flex-col items-start justify-start gap-2">
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            All Products
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Fresh Flowers
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Dried Flowers
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Live Plants
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Designer Vases
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Aroma Candles
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Freshener Diffuser
          </div>
        </div>
        <div
          class="self-stretch text-zinc-500 text-[21px] font-medium leading-relaxed"
        >
          Service
        </div>
        <div class="flex flex-col items-start justify-start gap-2">
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Flower Subcription
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Wedding & Event Decor
          </div>
        </div>
      </div>
      <div
        class="inline-flex flex-col items-start justify-start gap-6 p-10 bg-white border-l grow shrink basis-0 border-neutral-900"
      >
        <div
          class="self-stretch text-zinc-500 text-[21px] font-medium leading-relaxed"
        >
          About Us
        </div>
        <div class="flex flex-col items-start justify-start gap-2">
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Our story
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Blog
          </div>
        </div>
        <div class="flex flex-col items-start justify-start gap-2">
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Shipping & returns
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Terms & conditions
          </div>
          <div
            class="w-[280px] text-neutral-900 text-base font-medium leading-tight tracking-tight"
          >
            Privacy policy
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
