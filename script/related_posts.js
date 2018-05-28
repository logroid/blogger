var Logroid = Logroid || {};

Logroid.related_posts = Logroid.related_posts || (function(logroid) {
  function getLabel($entry) {
    var $labels = $entry.find('.post-footer .post-labels a[rel=tag]');
    if ($labels.length > 0) {
      return $.map($labels, function(m) {
        return $(m).attr('href').split('/').pop();
      });
    }
    return null;
  }

  function getFeed(label) {
    $.ajax({
      url: '://logroid.blogspot.com/feeds/posts/default/-/' + label,
      type: 'GET',
      cache: false,
      dataType: 'xml',
      timeout: 5000,
      success: function(res, status) {
        console.dir(res);
      }
    });
  }
  return {
    start: function() {
      $('div.post.hentry').each(function(i, entry) {
        var $entry = $(entry),
          labels = getLabel($entry);
        $.each(labels, function(ii, label) {
          getFeed(label);
        });
      });
    }


  };
})(Logroid);

Logroid.related_posts.start();