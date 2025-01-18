<template>
  <div>
    <h2>Date-Time Formatting</h2>
    <p>Long Date: {{ $d(new Date(), "dateLong") }}</p>
    <p>Short Date: {{ $d(new Date(), "dateShort") }}</p>
    <p>Time: {{ $d(new Date(), "time") }}</p>
    <p>
      Custom Format:
      {{
        $d(new Date(), {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      }}
    </p>
  </div>
</template>

<script>
export default {
  name: "DateTimeTest"
};
</script>
