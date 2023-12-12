---
title: Standard Websites
nextjs:
  metadata:
    title: Publisher Analytics Installation
    description: Step-by-step guide to install and configure the Publisher Analytics plugin.
---

To enable the execution of A/B tests, it is necessary to identify the articles elements on the page by installing the article-tags.

---

## Prerequisites

Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.

Ensure that you have completed the [Basic Installation](../../basic-installation/introduction/) of the Publisher Analytics Plugin.

### Installation

The mandatory tags for initiating the monitoring of an article are: `npaw-article`, `npaw-article-url`, and `npaw-article-title`.

The tags `npaw-article-image` and `npaw-article-description` are not mandatory, considering that not all articles have these elements.

Here is an example showcasing an article with all its elements accurately identified using the appropriate tags:

```html
<html>
<head>
</head>
<body>

<div>

<article npaw-article >
  <img npaw-article-image src="https://host/image01" alt="alt text for image">
  <a npaw-article-url href="https://host/article01">
  <h2 npaw-article-title >Breakthrough Discovery: Scientists Unveil New Renewable Energy Source</h2>
  </a>
  <p npaw-article-description >Researchers have announced a groundbreaking discovery of
    a novel renewable energy source, promising to revolutionize the way we power our
    world and significantly reduce our reliance on fossil fuels.</p>
</article>

<article npaw-article >
  <a npaw-article-url href="https://host/article02">
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

Incorporating these identification tags enables the manipulation of these elements, thereby facilitating automated A/B testing.

{% callout title="Important Details!" %}
1. This procedure for identifying articles is preferably done on the home screen.
2. Don't forget to identify the elements for each article on the home screen that you intend to monitor.
{% /callout %}

---

### Support

If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.
