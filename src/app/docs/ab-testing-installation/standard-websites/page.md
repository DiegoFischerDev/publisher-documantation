---
title: Standard Websites
nextjs:
  metadata:
    title: Publisher Analytics Installation
    description: Step-by-step guide to install and configure the Publisher Analytics plugin.
---

To enable the execution of A/B tests, it is necessary to identify the articles elements on the page by installing the article-tags.

The procedure described below can be used to install tags on the following types of websites:

1. Standard Websites
2. React app
3. Next app
4. Angular
5. Vue

If you're using WordPress, go to [WordPress Websites](../../../docs/ab-testing-installation/wordpress-websites/) A/B Testing Installation procedures.

---

## Prerequisites

Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.

Ensure that you have completed the [Basic Installation](../../../docs/basic-installation/introduction/) of the Publisher Analytics Plugin.

### Installation

Mandatory tags:
`npaw-article`
`npaw-article-url`
`npaw-article-title`

If any of the mandatory tags are missing, the article will not be considered.

Optional tags:
`npaw-article-image`
`npaw-article-description`

these tags are not mandatory, considering that not all articles have these elements.

Here is an example showcasing an article with all its elements accurately identified using the appropriate tags:

```html
<html>
<head></head>
<body>

<div>
    <article npaw-article >
        <img npaw-article-image src="https://breaknews/assets/image01" alt="alt text for image">
        <a npaw-article-url href="https://breaknews/breakthrough-discovery">
            <h2 npaw-article-title >Breakthrough Discovery: Scientists Unveil New Renewable Energy Source</h2>
        </a>
        <p npaw-article-description >Researchers have announced a groundbreaking discovery of
          a novel renewable energy source, promising to revolutionize the way we power our
          world and significantly reduce our reliance on fossil fuels.
        </p>
    </article>

    <article npaw-article >
        <a npaw-article-url href="https://breaknews/exploring-the-depths">
            <h2 npaw-article-title >Exploring the Depths: Unraveling the Mysteries of the Ocean's Twilight Zone</h2>
        </a>
    </article>
</div>

<!-- Publisher Analytics -->
<script src="https://publisheranalytics.ai/publisher-sdk"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var accountCode = "99999";
    var userId = "99999"
    var sdk = new PublisherAnalyticsSDK(accountCode, userId);
    sdk.setupExperiments();
  });
</script>
<!-- /Publisher Analytics -->

</body>
</html>
```

Incorporating these identification tags allows for the manipulation of these elements, making it possible to execute automated A/B testing.

{% callout title="Important Details!" %}
1. This procedure for identifying articles is preferably done on the home screen.
2. Don't forget to identify the elements for each article on the home screen that you intend to monitor.
{% /callout %}

---

### Support

If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.
